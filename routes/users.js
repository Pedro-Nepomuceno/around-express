const user = require('express').Router();
const { getUsers } = require('../controllers/users');
const { userId } = require('../controllers/userId');

user.get('/users', getUsers);
user.get('/:id', userId);

module.exports = user;
