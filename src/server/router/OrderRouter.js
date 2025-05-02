const express = require('express');
const { getOrder, makeOrder } = require('../controller/OrderController');

const OrderRouter = express.Router();

OrderRouter.get('/', getOrder)
OrderRouter.post('/', makeOrder)

module.exports = OrderRouter;