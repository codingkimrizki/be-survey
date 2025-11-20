'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('questions', 'page_id', 'id_page');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('questions', 'id_page', 'page_id');
  }
};
