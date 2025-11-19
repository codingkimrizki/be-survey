'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('feedback');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('feedback');
  }
};
