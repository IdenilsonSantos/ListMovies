const route = require('express').Router();

const MovieController = require('./app/controllers/movieController');

route.get('/movies', MovieController.listAll);
route.get('/movies/:movieId', MovieController.listById);
route.post('/movies', MovieController.create);
route.put('/movies/:movieId', MovieController.update);
route.delete('/movies/:movieId', MovieController.delete);

module.exports = route;