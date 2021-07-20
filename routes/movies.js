const router = require('express').Router();
const {
  getMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  validateMovieBody,
  validateMovieId,
  validateToken,
} = require('../middlewares/validators');

router.get('/', validateToken, getMovies);
router.post('/', validateToken, validateMovieBody, postMovie);
router.delete('/:movieId', validateToken, validateMovieId, deleteMovie);

module.exports = router;
