const express = require('express');

const router = require('./src/v1/routes/index.js');

const app = express();

app.use(express.json());

app.use('/api/v1',router);


module.exports = app;