const { Clock } = require('../../db/models');

class ClockService {
  static create({ name, image, description, adminId }) {
    return Clock.create({ name, image, description, adminId });
  }

  static findById() {
    return Clock.findAll({});
  }

  static findOne(id) {
    return Clock.findByPk(id);
  }

  static delete(id) {
    return Clock.destroy({ where: { id } });
  }

  static async update({ name, image, description, id }) {
    const clim = await Clock.findByPk(id)
    return clim.update({ name, image, description });
  }

  static findAll() {
    return Clock.findAll();
  }
}
module.exports = ClockService;
