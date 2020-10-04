# Shopfully backend

This is a tiny backend written for the exercise provided. It makes use of Serverless framework, node.js and AWS lambda.

## Setup

Run this command to install dependencies and generate package-lock.json and node_modules directory.

```
npm install
```

## Usage

**Deploy**

```
serverless deploy
```

**Invoke the function locally.**

using default query parameters (page = 1 & limit = 100)

```
serverless invoke local --function getFlyers
```

or sending query params to use within the funcion

```
serverless invoke local --function getFlyers --data '{ "queryStringParameters": {"limit":"40", "page":"2"}}'
```

**Invoke the function**

using default query parameters (page = 1 & limit = 100)

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/flyers
```

or sending query params to use within the funcion

```
curl https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/flyers?page=2&limit=40
```
