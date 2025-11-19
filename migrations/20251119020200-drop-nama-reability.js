'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('reability');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('reability');
  }
};
