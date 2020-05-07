const winston = require('winston');
require('winston-mongodb');
const config = require('config');
require('express-async-errors');

module.exports = function () {
  // uncaught Exception
  winston.exceptions.handle(
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/uncaughtExceptions.log' })
  );

  // promise rejection that was not handled
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: 'logs/unhandledRejection.log' }));
  winston.add(new winston.transports.MongoDB({ db: config.get('connectionString') }));
};
