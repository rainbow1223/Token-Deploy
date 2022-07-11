require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "QcSUHJAhznMupKRMQ1u01rE0ykLRhkkj";

// Replace this private key with your rinkeby account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const RINKEBY_PRIVATE_KEY =
  "c237013d5e9b2bbe0957457768ab0fca506f7dbb4f1a1d3de11d604c4a99aff9";

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
