const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { validateEmailAndPassword } = require('./middlewares/validators');

const {
  createUser,
  login,
} = require('../controllers/users');

router.post('/signin', validateEmailAndPassword, login);
router.post('/signup', validateEmailAndPassword, createUser);
router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

router.use('*', () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
