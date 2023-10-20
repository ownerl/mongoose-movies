var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/movies');

// GET /movies 
router.get('/', moviesController.index);
// GET /movies/new
router.get('/new', moviesController.new);
// POST /movies
router.post('/', moviesController.create);

module.exports = router;
