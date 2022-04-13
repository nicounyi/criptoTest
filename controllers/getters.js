"use strict";
const Web3 = require("web3");
const axios = require("axios");
const MAINNET =
  process.env.MAINNET ||
  "https://mainnet.infura.io/v3/d9d423b8893b497d9448bc56e14607be";
const ADDRESS =
  process.env.ADDRESS ||
  "https://api.etherscan.io/api?module=account&action=txlist&address=";
const APIKEY =
  process.env.APIKEY ||
  "SVMBQEM199I7KHBMVYKV8MCZDHGA8CWI2D";
const ERROR_MESSAGE =
  process.env.ERROR_MESSAGE || "Ocurrió un error inesperado";
const web3 = new Web3(MAINNET);

const getBlocks = (req, res, next) => {
  const blockNumber = req.params.block ? req.params.block : "latest";
  console.log(blockNumber);
  let lastBlock;
  web3.eth
    .getBlock(blockNumber)
    .then((response) => {
      lastBlock = response;
      res.json(lastBlock);
    })
    .catch((err) => {
      res.status(404).send(`${ERROR_MESSAGE} : ${err.message}`);
    });
};

const getTransaction = (req, res, next) => {
  const hash = req.params.transaction;
  let transaction;
  web3.eth
    .getTransaction(
      `${hash}`
    )
    .then((response) => {
      transaction = response;
      res.json(transaction);
    })
    .catch((err) => {
      res.status(404).send(`${ERROR_MESSAGE} : ${err.message}`);
    });
};

const getAddress = async (req, res, next) => {
  const addressHash = req.params.address;
  try {
    const response = await axios.get(`${ADDRESS}${addressHash}&sort=asc&apikey=${APIKEY}`)
    res.json(response.data.result);
  } catch (err) {
    res.status(404).send(`${ERROR_MESSAGE} : ${err.message}`);
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
  getBlocks,
  getTransaction,
  getAddress,
  getEthPrice,
};
