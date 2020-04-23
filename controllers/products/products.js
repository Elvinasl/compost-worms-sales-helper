const express = require('express');
const router = express.Router();

const productDTO = require('./dtos/productDTO');
const validator = require('./../validator');
const productService = require('./../services/productService');

router.get('/', (req, res) => {
  // TODO: make it dto
  res.json({
    products: productService.getAllProducts()
  });
});

router.get('/:id', (req, res) => {
  res.json(productService.getProductById(req.params.id));
});

router.post('/', validator(productDTO), (req, res) => {
  res.json(productService.createProduct(req.body));
});

module.exports = router;
