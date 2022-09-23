const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Ether Wars";
const description =
  "ETHER WARS - strategic NFT P2E Game, built on the Ethereum Blockchain and inspired by the Star wars universe";
const baseUri = "ipfs://QmXPhJHnLAV76kEsKsMqAVPiyH77MSiKKH2SK8kWtf9Vzm";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};
const gen1 = 2500;
const gen2 = 6000;
const layerConfigurations = [
  // {
  //     growEditionSizeTo: 1500,
  //     layersOrder: [{ name: "Back" }, { name: "Crystal" }],
  // },
  // {
  //     growEditionSizeTo: 2250,
  //     layersOrder: [
  //         { name: "background trooper" },
  //         { name: "body trooper" },
  //         { name: "bodycolour trooper" },
  //         { name: "headcolour trooper" },
  //         { name: "gun trooper" },
  //         { name: "type" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 2368,
  //     layersOrder: [
  //         { name: "background sith" },
  //         { name: "head sith" },
  //         { name: "clothes sith" },
  //         { name: "weapon sith" },
  //         { name: "type sith" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 2487,
  //     layersOrder: [
  //         { name: "background jedi" },
  //         { name: "clothes jedi" },
  //         { name: "head jedi" },
  //         { name: "weapon jedi" },
  //         { name: "type jedi" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 2500,
  //     layersOrder: [
  //         { name: "background legend", options: { bypassDNA: true } },
  //         { name: "body legend" },
  //         { name: "type legend" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 5650,
  //     layersOrder: [
  //         { name: "background trooper" },
  //         { name: "body trooper" },
  //         { name: "bodycolour trooper" },
  //         { name: "headcolour trooper" },
  //         { name: "gun trooper" },
  //         { name: "type" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 5816,
  //     layersOrder: [
  //         { name: "background sith" },
  //         { name: "head sith" },
  //         { name: "clothes sith" },
  //         { name: "weapon sith" },
  //         { name: "type sith" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 5983,
  //     layersOrder: [
  //         { name: "background jedi" },
  //         { name: "clothes jedi" },
  //         { name: "head jedi" },
  //         { name: "weapon jedi" },
  //         { name: "type jedi" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 6000,
  //     layersOrder: [
  //         { name: "background legend", options: { bypassDNA: true } },
  //         { name: "body legend" },
  //         { name: "type legend" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 9600,
  //     layersOrder: [
  //         { name: "background trooper" },
  //         { name: "body trooper" },
  //         { name: "bodycolour trooper" },
  //         { name: "headcolour trooper" },
  //         { name: "gun trooper" },
  //         { name: "type" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 9790,
  //     layersOrder: [
  //         { name: "background sith" },
  //         { name: "head sith" },
  //         { name: "clothes sith" },
  //         { name: "weapon sith" },
  //         { name: "type sith" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 9980,
  //     layersOrder: [
  //         { name: "background jedi" },
  //         { name: "clothes jedi" },
  //         { name: "head jedi" },
  //         { name: "weapon jedi" },
  //         { name: "type jedi" },
  //     ],
  // },
  // {
  //     growEditionSizeTo: 10000,
  //     layersOrder: [
  //         { name: "background legend", options: { bypassDNA: true } },
  //         { name: "body legend" },
  //         { name: "type legend" },
  //     ],
  // },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  gen1,
  gen2,
};
