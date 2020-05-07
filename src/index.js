const express = require('express');

const app = express();

// require('dotenv').config();

// const logger = require('./startups/logging')();
// require('./startups/routes')(app);
// require('./startups/db');
app.get('/', (req, res) => {
  res.send('Hello Express');
});
const port = process.env.port || 3000;
const server = app.listen(port, () => {
  // logger.info(`Listening on port ${port}...`);
});

module.exports = server;
