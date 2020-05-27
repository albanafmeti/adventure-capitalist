const BusinessController = require('../controllers/BusinessController');
const router = require('express').Router();
const authMiddleware = require('../middleware/auth');

router.get('/businesses', authMiddleware, BusinessController.getBusinesses);
router.get('/managers', authMiddleware, BusinessController.getManagers);

module.exports = router;
