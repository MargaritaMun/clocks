'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', [
      {
        name: 'Margarita',
        hashPass: await bcrypt.hash('123', 10),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admins', null, {});
  },
};
