'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('usability');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('usability');
  }
};
