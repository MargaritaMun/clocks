const ClockController = require('../controllers/clock.controller');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const ClockRouter = require('express').Router();

ClockRouter.post('/newclock',verifyAccessToken,ClockController.createClock);
ClockRouter.get('/all', ClockController.getAll);
ClockRouter.get('/', verifyAccessToken, ClockController.getClocks);
ClockRouter.get('/:id', ClockController.getOneClock);
ClockRouter.delete('/:id', verifyAccessToken, ClockController.deleteClock);
ClockRouter.put('/:id', verifyAccessToken, ClockController.updateClock);

module.exports = ClockRouter;
