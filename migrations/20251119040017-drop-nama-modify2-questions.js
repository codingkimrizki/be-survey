'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('questions', 'question_type', {
      type: Sequelize.ENUM('Y/N', 'rating', 'suggest', 'mixed'),
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    // rollback ke enum sebelumnya
    await queryInterface.changeColumn('questions', 'question_type', {
      type: Sequelize.ENUM('Y/N', 'rating', 'suggest'),
      allowNull: false
    });
  }
};
