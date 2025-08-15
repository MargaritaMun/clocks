const ApplicationController = require('../controllers/application.controller')

const applicationRouter = require('express').Router();

applicationRouter.post('/',ApplicationController.createApplication);
// applicationRouter.get('/all', ApplicationController.getApplications);
applicationRouter.get('/', ApplicationController.getAll);
applicationRouter.get('/:id', ApplicationController.getOneApplication);
applicationRouter.delete('/:id',  ApplicationController.deleteApplication);
applicationRouter.post('/send-email', ApplicationController.sendEmail);
applicationRouter.put('/:id',  ApplicationController.updateApplication);

module.exports = applicationRouter;