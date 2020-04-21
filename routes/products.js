const express = require('express');
const router = express.Router();

const products = [1, 2, 3, 4, 5];

router.get('/', function(req, res) {
  res.send(products);
});

router.get('/:id', function(req, res) {
  res.send(`Product id: ${req.params.id}`);
});

router.post('/', function(req, res) {
  res.send(req.body);
});

module.exports = router;
