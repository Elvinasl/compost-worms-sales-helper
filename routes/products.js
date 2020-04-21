var express = require('express');
var router = express.Router();

const products = [1, 2, 3, 4, 5];

/* Get all products. */
router.get('/', function(req, res) {
  console.log('id: ')
  res.send(products);
});

router.get('/:id', function(req, res) {
  res.send(`Product id: ${req.params.id}`);
});

router.post('/', function(req, res) {
  res.send(req.body);
});

module.exports = router;
