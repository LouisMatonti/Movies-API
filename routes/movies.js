const express = require('express');
const router = express.Router();
const handlersMovies = require('..//handlers/movies');

router
    .route('/')
    .post(handlersMovies.createMovie)
    .get(handlersMovies.getAllMovies);

router
    .route('/:id')
    .get(handlersMovies.getOneMovie)
    .put(handlersMovies.updateOneMovie)
    .delete(handlersMovies.deleteOneMovie);

router
    .route('/:producer=<producer>')
    .get(handlersMovies.getFiltered)

router
    .route('/:isOscarWinner=true')
    .get(handlersMovies.getOscarMovies)
    
module.exports = router;