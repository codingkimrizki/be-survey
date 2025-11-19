'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('support');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('support');
  }
};
