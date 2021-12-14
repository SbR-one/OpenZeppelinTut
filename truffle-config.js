const { alchemyAPIKey, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        mnemonic, `https://eth-rinkeby.alchemyapi.io/v2/${alchemyAPIKey}`,
      ),
      network_id: 4,
      gasPrice: 10e9,
      skipDryRun: true,
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",
    }
  },

};
