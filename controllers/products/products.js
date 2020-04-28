const express = require('express');

const router = express.Router();

const productDTO = require('../../models/dtos/products/productDTO');
const validator = require('../../models/dtos/validator');
const productService = require('../../services/productService');

router.get('/', async (req, res) => {
  // TODO: make it dto
  productService.getAllProducts()
    .then((products) => res.json({
      products,
    }));
});

router.get('/:id', (req, res) => {
  res.json(productService.getProductById(req.params.id));
});

router.post('/', validator(productDTO), (req, res) => {
  productService.createProduct(req.body)
    .then((result) => res.json(result));
});

module.exports = router;
