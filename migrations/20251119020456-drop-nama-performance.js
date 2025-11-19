'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('performance');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('performance');
  }
};
