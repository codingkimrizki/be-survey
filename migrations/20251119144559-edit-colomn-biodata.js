'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('biodata', 'updateAt', 'updatedAt');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('biodata', 'updatedAt', 'updateAt');
  }
};
