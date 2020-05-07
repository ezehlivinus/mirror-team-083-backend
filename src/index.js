const express = require('express');
const winston = require('winston');
require('dotenv').config();

const app = express();
const { exceptRejectLogger, logger } = require('./startups/logging');

exceptRejectLogger();

require('./startups/routes')(app);
require('./startups/routes')(app);
require('./startups/db');

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.port || 3000;

if (!isProduction) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

const server = app.listen(port, () => {
  logger.info(`\nListening on port ${port}...`);
});

module.exports = server;
