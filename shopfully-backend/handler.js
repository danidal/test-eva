const csv = require("csv-parser");
const fs = require("fs");

const filepath = "./flyers_data.csv";

const getFlyers = async (event) => {
  const page =
    (event &&
      event.queryStringParameters &&
      event.queryStringParameters.page) ||
    1;

  const limit =
    (event &&
      event.queryStringParameters &&
      event.queryStringParameters.limit) ||
    100;

  // we need serverless-babel-plugin to enable es5+ features
  // const { queryStringParameters: { page = 1, limit = 100 } = {} } = event;

  return new Promise((resolve) => {
    const flyers = [];

    fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => flyers.push(data))
      .on("end", () => {
        const chunkedFlyers = flyers.slice(page * limit - limit, page * limit);
        resolve({
          statusCode: 200,
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET"
          },
          body: JSON.stringify({ flyers: chunkedFlyers }),
        });
      });
  });
};

module.exports = {
  getFlyers,
};
