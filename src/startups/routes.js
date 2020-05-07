const express = require('express');

const basePath = '/api/v1';

// const users = (app) => app.get('/', (req, res, next) => res.send('Hello Express'), next());

module.exports = function (app) {
  app.use(express.json());
//   app.use(`${basePath}/users`, users);

  // Error middleware
//   app.use(error);
};
