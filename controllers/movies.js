const Movie = require('../models/movie');

module.exports = {
    index,
    new: newMovie,
    create
};

function newMovie(req,res) {
    res.render('movies/new', { errorMsg: ''});
}

async function create(req,res) {
    req.body.nowShowing = !!req.body.nowShowing;
    req.body.cast = req.body.cast.trim(); // trim removes white space (space, indents, etc) from beginning and end of strings, and returns a string
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/); // using regex here instead of justt ',' accounts for white spaces in the array
    try {
        await Movie.create(req.body);
        res.redirect('/movies/new');
    } catch (err) {
        console.log(err);
        res.render('movies/new', { errorMsg: err.message });
    }
}

async function index(req,res) {
    const movies = await Movie.find({});
    res.render('movies/index', {
        movies,
    });
}