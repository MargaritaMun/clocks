
const { Application } = require('../../db/models');

class ApplicationService {
  static create({ userName, phoneNumber,image, description}) {
    return Application.create({ userName, phoneNumber,image, description});
  }

//   static findById() {
//     return Clock.findAll({
     
//     });
//   }

//   static findOne(id) {
//     return Clock.findByPk(id);
//   }

  

 

//   static findAll() {
//     return Clock.findAll()
//   }
}
module.exports = ApplicationService;