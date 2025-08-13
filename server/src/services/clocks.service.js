const { Clock } = require('../../db/models');

class ClockService {
  static create({ title, text, userId }) {
    return Clock.create({ title, text, userId });
  }

  static findById() {
    return Clock.findAll({
     
    });
  }

  static findOne(id) {
    return Clock.findByPk(id);
  }

  static delete(id) {
    return Clock.destroy({ where: { id } });
  }

  static update({ title, text, id }) {
    return Clock.update({ title, text }, { where: { id } });
  }

  static findAll() {
    return Clock.findAll()
  }
}
module.exports = ClockService;
