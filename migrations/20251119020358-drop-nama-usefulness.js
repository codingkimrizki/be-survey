'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('usefulness');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('usefulness');
  }
};
