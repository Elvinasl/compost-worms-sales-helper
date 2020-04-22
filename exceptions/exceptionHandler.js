const express = require('express');
const validationException = require('./validationException');

const exceptionHandler = function (err, req, res, next) {
    console.error(err.stack)
    if (err instanceof validationException) {
        return res
            .status(400)
            .json({
                httpStatus: 400,
                message: err.message,
            });
    }
    next(err);
};

module.exports = exceptionHandler;