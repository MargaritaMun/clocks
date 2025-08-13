const ApplicationController = require('../controllers/application.controller')

const applicationRouter = require('express').Router();

applicationRouter.post('/',ApplicationController.createApplication);

module.exports = applicationRouter;