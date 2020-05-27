const UserController = require('../controllers/UserController');
const router = require('express').Router();
const apply = require('../validators/Validator').apply;
const authMiddleware = require('../middleware/auth');

const LoginValidator = require('../validators/LoginValidator');
const RegisterValidator = require('../validators/RegisterValidator');

router.post('/login', apply(LoginValidator), UserController.login);
router.post('/register', apply(RegisterValidator), UserController.register);
router.get('/user', authMiddleware, UserController.currentUser);


module.exports = router;
