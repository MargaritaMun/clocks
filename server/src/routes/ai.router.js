const AiController = require('../controllers/ai.controller');
const aiRouter = require('express').Router();

aiRouter.post('/messages', AiController.askAi)

module.exports = aiRouter