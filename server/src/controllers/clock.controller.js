const ClockService = require('../services/clocks.service');

class ClockController {
  static async createClock(req, res) {
    try {
      const id = res.locals.user.id;
      const { title, text } = req.body;
      const Clock = await ClockService.create({ title, text, userId: id });
      return res.json(Clock);
    } catch (error) {
      console.log(error);
    }
  }

  static async getClocks(req, res) {
    try {
      const userId = res.locals.user.id;
      const Clocks = await ClockService.findById(userId);
      return res.json(Clocks);
    } catch (error) {
      console.log(error);
    }
  }

  static async getOneClock(req, res) {
    
    
    try {
      const { id } = req.params;
      const Clock = await ClockService.findOne(id);
     return res.json(Clock);
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteClock(req, res) {
    try {
      const { id } = req.params;
      const Clock = await ClockService.delete(id);
      return res.json(Clock);
    } catch (error) {
      console.log(error);
    }
  }
  static async updateClock(req, res) {
    try {
      const { id } = req.params;
      const { title, text } = req.body;
      const Clock = await ClockService.update({ title, text, id });
      return res.json(Clock);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    try {
      const Clocks = await ClockService.findAll();
      return res.json(Clocks);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ClockController;
