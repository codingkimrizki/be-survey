'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_experience');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('user_experience');
  }
};
