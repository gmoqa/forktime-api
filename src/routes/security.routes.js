const router = require('express').Router();

const controller = require('../controllers/security.controller');

router.get('/login', controller.login);

module.exports = router;
