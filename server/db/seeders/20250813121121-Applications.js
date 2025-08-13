'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applications', [
      {
        userName: 'Margarita',
        phoneNumber: '123445566',
        image:
          'https://www.chronoland.ru/images/thumbs-720x900-products/1O9O3kpFpEWCxKAuoMcmeaFgydlQEStFuHeleSA7.png',
        description: 'Часы Rolex SUBMARINER DATE 41 MM YELLOW GOLD 126618LN',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Applications', null, {});
  },
};
