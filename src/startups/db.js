const mongoose = require('mongoose');
const winston = require('winston');

const config = require('../config/default.json');


module.exports = function () {
  const db = config.connectionString;
  mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => winston.info(`Connected to ${db} ...`));
};
