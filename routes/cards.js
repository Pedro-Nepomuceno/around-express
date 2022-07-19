const routes = require('express').Router();

const { cardsData } = require('../controllers/cards');

routes.get('/cards', cardsData);

module.exports = routes;
