const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const socksRoutes = require('./routes/movies');

//Middleware(s)
app.use(express.json());

//First route
app.get('/', (req, res) => {
    res.send('Welcome to happy wut');
});

app.use('/api/movies', socksRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});