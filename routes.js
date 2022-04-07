
"use strict";
const express = require('express');
const routes = express.Router();

routes.get('/test',(req, res) => {
    res.send('Test Api');
});

module.exports = routes;