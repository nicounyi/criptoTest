
"use strict";
const express = require('express');
const routes = express.Router();
const { getLastBlock, getTransaction, getAddress } = require('./controllers/getters');

routes.get('/blocks', getLastBlock);

routes.get('/transaction', getTransaction);

routes.get('/address', getAddress);



module.exports = routes;