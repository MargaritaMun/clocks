const { where } = require('sequelize');
const { Application } = require('../../db/models');

class ApplicationService {
  static create({ userName, phoneNumber, image, description }) {
    return Application.create({ userName, phoneNumber, image, description });
  }

  static findById() {
    return Application.findAll({});
  }

  static findOne(id) {
    return Application.findByPk(id);
  }

  static deleteApplication(id) {
    return Application.destroy({ where: { id } });
  }

  static findAll() {
    return Application.findAll();
  }
}
module.exports = ApplicationService;
