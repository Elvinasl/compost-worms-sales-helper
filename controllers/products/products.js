const express = require('express');
const router = express.Router();

const productDTO = require('./dtos/productDTO');
const validator = require('./../validator');
const productService = require('./../services/productService');

router.get('/', (req, res) => {
  res.json({
    products: productService.getAll()
  });
});

router.get('/:id', (req, res) => {
  res.json(productService.getById(req.params.id));
});

router.post('/', validator(productDTO), (req, res) => {
  res.json(productService.create(req.body));
});

module.exports = router;
