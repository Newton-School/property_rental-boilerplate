const express = require('express');
const app = express();
const router = require('../routes/propertyRoutes');

app.use(express.json());

app.use('/api/v1', router);

module.exports = app;
