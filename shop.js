const path = require('path');

const express = require('express');

const productcontroller= require('../controlers/shop')

const router = express.Router();

router.get('/',ShopController.getIndex);
router.get('/products',ShopController.getProduct);
router.get('/products/:productId',ShopController.getProduct);
router.get('/cart',ShopController.getCart);
router.get('/orders',ShopController.getOrders);
router.get('/checkout',ShopController.getCheckout);


module.exports = router;
