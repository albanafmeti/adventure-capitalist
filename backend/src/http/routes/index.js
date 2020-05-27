const router = require('express').Router();

router.use('/', require('./user'));
router.use('/', require('./business'));

module.exports = router;
