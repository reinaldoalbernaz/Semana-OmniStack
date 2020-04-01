const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngsController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;