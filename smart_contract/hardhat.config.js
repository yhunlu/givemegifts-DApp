require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/h-u9tKA6yVpLOdhltW67Ae70FOfe7ti-',
      accounts: [
        'a6535a4fbd941934ae362b789ca65b0ab33740421563821b599c39c5078c1846',
      ],
    },
  },
};
