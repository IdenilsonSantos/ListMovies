const route = require('express').Router()

//Controllers
const AuthController = require('./app/controllers/authController');

//Routes
route.post('/register', AuthController.create);
route.post('/login', AuthController.login);

module.exports = route;

