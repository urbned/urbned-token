require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: process.env.QUICKNODE_SEPOLIA_URL || "https://cold-cosmopolitan-sky.ethereum-sepolia.quiknode.pro/f86fce9930d5f1c3afefec6c6942c91edafe1fae",
      accounts: [process.env.b67caf648502f473bde3e03d94a23bae5650f4963e3a324ca1191da9a2aebd],
      timeout: 120000
    },
    mainnet: {
      url: process.env.QUICKNODE_MAINNET_URL || "https://small-dimensional-liquid.quiknode.pro/a314c07bdd85f4de2f0d1cc20033a6a8e0172db7",
      accounts: [process.env.b67caf648502f473bde3e03d94a23bae5650f4963e3a324ca1191da9a2aebd],
      timeout: 120000
    }
  },
  etherscan: {
    apiKey: process.env.P1MZQJQJWG27QB6ZNT3G949P7ZBY8Y9F9H
  },
  sourcify: {
    enabled: true
  }
};