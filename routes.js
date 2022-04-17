
"use strict";
const express = require('express');
const routes = express.Router();
const { getBlocks, getTransaction, getAddress, getEthPrice } = require('./controllers/getters');

routes.get('/blocks/:block?', getBlocks);

routes.get('/transaction/:transaction', getTransaction);

routes.get('/address/:address', getAddress);

routes.get('/ethprice', getEthPrice);


module.exports = routes;