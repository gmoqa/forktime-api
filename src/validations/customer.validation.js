const Joi = require('joi');

const create = Joi.object().keys({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    dni : Joi.string().required(),
    phone: Joi.string().required().length(9)
});

module.exports = {
    create
};
