const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const validationException = require('./exceptions/validationException');


const productsController = require('./controllers/products/products');

const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.use('/products', productsController);


app.use(function handleValidationError(error, request, response, next) {
    if (error instanceof validationException) {
        return response
            .status(400)
            .json({
                httpStatus: 400,
                message: error.message,
            });
    }
    next(error);
});

module.exports = app;
