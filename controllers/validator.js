const Joi = require('joi');

const validator = (dto) => {
    return (req, res, next) => {

        const { error } = Joi.validate(req.body, dto);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            res.status(400).json({
                error: message
            })
        }
    }
}

module.exports = validator;