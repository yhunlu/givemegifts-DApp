require('@nomiclabs/hardhat-waffle');

const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/h-u9tKA6yVpLOdhltW67Ae70FOfe7ti-',
      accounts: [privateKey],
    },
  },
};
