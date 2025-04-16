const express = require('express');
const { getItems } = require('../controller/ItemsController');

const ItemsRouter = express.Router();

ItemsRouter.get('/', getItems)

module.exports = ItemsRouter;