"use strict";
const axios = require("axios");
const Web3 = require('web3');
const MAINNET = process.env.MAINNET || 'https://mainnet.infura.io/v3/d9d423b8893b497d9448bc56e14607be'
const ERROR_MESSAGE = process.env.ERROR_MESSAGE || 'Ocurrió un error inesperado'
const web3 = new Web3(MAINNET);

const getBlocks = (req, res, next) => {
    web3.eth.getBlock('latest')
    .then(console.log);
}

module.exports = {
    getBlocks
}