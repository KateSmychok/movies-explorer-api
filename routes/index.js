const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { validateEmailAndPassword } = require('../middlewares/validators');
const UnauthorizedError = require('../errors/unauthorized-err');

const {
  createUser,
  login,
  logout,
} = require('../controllers/users');

router.post('/signup', validateEmailAndPassword, createUser);
router.post('/signin', validateEmailAndPassword, login);
router.post('/signout', logout);
router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

router.use('*', () => {
  throw new UnauthorizedError('Необходима авторизация');
});

module.exports = router;
