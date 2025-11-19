'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('compitibility');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('compitibility');
  }
};
