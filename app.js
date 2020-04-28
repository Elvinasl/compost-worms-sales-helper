const express = require('express'),
    config = require('./config/config'),
    db = require('./models/entities'),
    productsController = require('./controllers/products/products'),
    exceptionHandler = require('./exceptions/exceptionHandler');

const app = express();

require('./config/express')(app);

app.use('/products', productsController);

// keep it last
app.use(exceptionHandler);

db.sequelize
    .sync()
    .catch(function (e) {
        throw new Error(e);
    });

module.exports = app;
