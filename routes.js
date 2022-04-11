
"use strict";
const express = require('express');
const routes = express.Router();
const { getLastBlock, getTransaction, getAddress, getEthPrice } = require('./controllers/getters');

routes.get('/blocks', getLastBlock);

routes.get('/transaction', getTransaction);

routes.get('/address', getAddress);

routes.get('/ethprice', getEthPrice);


module.exports = routes;