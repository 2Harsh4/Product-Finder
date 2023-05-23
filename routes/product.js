const express = require('express');
const productController = require('../controller/product');

const router = express.Router();




// End Points
router
  .post('/', productController.createProduct)
  // .get('/ejs', productController.getAllProductsejs)
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

exports.router = router;  