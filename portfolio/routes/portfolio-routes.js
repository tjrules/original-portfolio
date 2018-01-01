const express = require('express');
const portfolioController = require('../controllers/portfolio-controller');
const portfolioRouter = express.Router();

//
//
portfolioRouter.get('/', portfolioController.index);
// // portfolioRouter.get('/:id', portfolioController.show);
// // portfolioRouter.get('/:id/edit', portfolioController.edit);
// // portfolioRouter.put('/:id', portfolioController.update);
//
//
module.exports = portfolioRouter;
