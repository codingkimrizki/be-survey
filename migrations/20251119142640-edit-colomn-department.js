'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('department', 'updateAt', 'updatedAt');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('department', 'updatedAt', 'updateAt');
  }
};
