const express = require('express');
const router = express.Router();

const productDTO = require('./dtos/productDTO');
const validator = require('./../validator');
const productService = require('./../services/productService');

router.get('/', function(req, res) {
  res.json({
    products: productService.getAll()
  });
});

router.get('/:id', function(req, res) {
  res.json(productService.getById(req.params.id));
});

router.post('/', validator(productDTO), function(req, res) {
  res.json(productService.create(req.body));
});

module.exports = router;
