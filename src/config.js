const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Weeds Lab Tickets";
const description = "NFT Tickets for lottery raffle";
const baseUri = "ipfs://QmS2RZLyx2iDRXjfDyrR3hbfQ6dM9cqrHPgaPLLTiwbnJn";

const solanaMetadata = {
    symbol: "EYES",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    creators: [
        {
            address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
            share: 100,
        },
    ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
    {
        growEditionSizeTo: 30,
        layersOrder: [
            { name: "Background" },
            { name: "Eyeball" },
            { name: "Eye color" },
            { name: "Iris" },
            { name: "Shine" },
            { name: "Bottom lid" },
            { name: "Top lid" },
        ],
    },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 1024,
    height: 1024,
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
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "90%",
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
    imageName: "preview.jpg",
};

const preview_gif = {
    numberOfImages: 2,
    order: "MIXED", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 300,
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
};
