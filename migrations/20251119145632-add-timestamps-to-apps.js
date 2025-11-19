'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('apps', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    });
    await queryInterface.addColumn('apps', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('apps', 'createdAt');
    await queryInterface.removeColumn('apps', 'updatedAt');
  }
};
