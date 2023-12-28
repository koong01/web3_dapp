require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/fMk018pFih_dz6uENMEpD4cb8Rnh5OAJ',
      accounts: ['47fe7a54a79b8e60a3779e339262e0d88fc185ed7148b88b3addfb2b43a9ac6d'],
    },
  },
};