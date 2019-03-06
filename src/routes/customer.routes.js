const router = require('express').Router();

const controller = require('../controllers/customer.controller');
const validate = require('../middlewares/validate.middleware');
const schemas = require('../validations/customer.validation');

router.get('', controller.all);
router.post('', validate(schemas.create), controller.create);

module.exports = router;
