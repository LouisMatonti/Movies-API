const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/movies', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to Movie DB...'))
    .catch(err => console.log(`Error connecting to DB : ${err}`));

//Exporting all models
module.exports.Movie = require('./movies');