"use strict";
const Web3 = require("web3");
const axios = require("axios");
const MAINNET =
  process.env.MAINNET ||
  "https://mainnet.infura.io/v3/d9d423b8893b497d9448bc56e14607be";
const ERROR_MESSAGE =
  process.env.ERROR_MESSAGE || "Ocurrió un error inesperado";
const web3 = new Web3(MAINNET);

const getLastBlock = (req, res, next) => {
  let lastBlock;
  web3.eth
    .getBlock("latest")
    .then((response) => {
      lastBlock = response;
      res.json(lastBlock);
    })
    .catch((err) => {
      console.error(ERROR_MESSAGE, err);
    });
};

const getTransaction = (req, res, next) => {
  let transaction;
  web3.eth
    .getTransaction(
      "0x3bcd86b070c47fff629892c4883cc0ba6f6fe15ffad2404ea4b2aff271a6a606"
    )
    .then((response) => {
      transaction = response;
      res.json(transaction);
    })
    .catch((err) => {
      console.error(ERROR_MESSAGE, err);
    });
};

const getAddress = async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://api.etherscan.io/api?module=account&action=txlist&address=0x646db8ffc21e7ddc2b6327448dd9fa560df41087&sort=asc&apikey=SVMBQEM199I7KHBMVYKV8MCZDHGA8CWI2D"
    );
    res.json(response.data.result);
  } catch (err) {
    console.error(ERROR_MESSAGE);
  }
};

const getEthPrice = async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
    );
    res.json(response.data);
  } catch (err) {
    console.error(ERROR_MESSAGE);
  }
};

module.exports = {
  getLastBlock,
  getTransaction,
  getAddress,
  getEthPrice
};
