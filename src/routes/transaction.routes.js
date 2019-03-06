const router = require('express').Router();

const controller = require('../controllers/transaction.controller');

router.get('', controller.all);

module.exports = router;
