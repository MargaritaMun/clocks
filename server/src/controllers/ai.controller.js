const AiService = require('../services/ai.service');

class AiController {
  static async askAi(req, res) {
    const { message } = req.body;
    const aiResponse = await AiService.ask(message);
    res.json(aiResponse);
  }
}

module.exports = AiController;
