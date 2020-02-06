const db = require('../models');

//Create a Movie
exports.createMovie = async (req, res) => {
    try {
        let newMovie = await db.Movie.create(req.body);
        console.log(newMovie);
        return res.status(200).json({
            message: 'New movie created with success !',
            newMovie
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot create the movie',
            error: err
        });
    }
};

//Get all Movies
exports.getAllMovies = async (req, res) => {
    try {
        let movies = await db.Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot find your movies',
            error: err
        });
    }
};

//Get one Movie
exports.getOneMovie = async (req, res) => {
    try {
        let movie = await db.Movie.findById(req.params.id);
        return res.status(200).json(movie);
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot find your movie',
            error: err
        });
    }
};

//Get Movies from a producer
exports.getFiltered = async (req, res) => {
    try {
        let movies = await db.Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot find your movies',
            error: err
        });
    }
};

//Get Movies with oscar
exports.getOscarMovies = async (req, res) => {
    try {
        let movies = await db.Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot find your movies',
            error: err
        });
    }
};

//Update one Movie
exports.updateOneMovie = async (req, res) => {
    try {
        let movieToUpdate = await db.Movie.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json({
            message: 'Your movie has been modified with success!',
            movieToUpdate
        });
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot modify your movie',
            error: err
        });
    }
};

//Delete one Movie
exports.deleteOneMovie = async (req, res) => {
    try {
        await db.Movie.findByIdAndRemove(req.params.id);
        return res.status(200).json('movie deleted !');
    } catch (err) {
        return res.status(400).json({
            message: 'Cannot delete your movie',
            error: err
        });
    }
};