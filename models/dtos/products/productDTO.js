const Joi = require('joi');

const productDTO = Joi.object().keys({
  productId: Joi.number().required(),
  amount: Joi.number().required(),
  phone: Joi.string(),
});

module.exports = productDTO;
