const imageSrcs = [
  "https://it-it-media-publications.shopfully.cloud/publications/page_assets/230870/1/page_1_level_2_1047349825.jpeg",
  "https://it-it-media-publications.shopfully.cloud/publications/page_assets/231736/1/page_1_level_2_646297593.jpeg",
  "https://it-it-media-publications.shopfully.cloud/publications/page_assets/231625/1/page_1_level_2_1668194111.jpeg",
  "https://it-it-media.shopfully.cloud/images/flyergibs/gibCover_5f748b95-5be4-4e83-8dd0-24adac1f4144.png",
  "https://it-it-media-publications.shopfully.cloud/publications/page_assets/231319/1/page_1_level_2_345832381.jpeg",
];

const getRandomImage = () =>
  imageSrcs[Math.floor(Math.random() * imageSrcs.length)];

export default getRandomImage;
