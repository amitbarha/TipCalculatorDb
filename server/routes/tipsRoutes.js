const tipsController = require('./../controllers/tipsControllers')
const express = require('express');
const Router = express.Router();


Router.route('/').get(tipsController.getAll)

Router.route('/create').post(tipsController.create)

Router.route('/update').patch(tipsController.update)

module.exports = Router;