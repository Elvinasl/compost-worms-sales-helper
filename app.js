const express = require('express');
const config = require('./config/config');
const db = require('./models/entities');
const productsController = require('./controllers/products/products');
const exceptionHandler = require('./exceptions/exceptionHandler');

const app = express();

require('./config/express')(app);

app.use('/products', productsController);

// keep it last
app.use(exceptionHandler);

db.sequelize
  .sync()
  .catch((e) => {
    throw new Error(e);
  });

module.exports = app;
