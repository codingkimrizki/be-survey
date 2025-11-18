'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('master_apps', { 
      id_master_apps: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_master_apps: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('master_apps');
  }
};
