
"use strict";
const express = require('express');
const routes = express.Router();
const { getBlocks } = require('./controllers/blocks');

routes.get('/blocks', getBlocks);


module.exports = routes;