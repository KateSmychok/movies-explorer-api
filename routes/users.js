const router = require('express').Router();
const {
  getCurrentUser,
  updateCurrentUser,
} = require('../controllers/users');

const {
  validateUserBody,
  validateToken,
} = require('../middlewares/validators');

router.get('/me', validateToken, getCurrentUser);
router.patch('/me', validateToken, validateUserBody, updateCurrentUser);

module.exports = router;
