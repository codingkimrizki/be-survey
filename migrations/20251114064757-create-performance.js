'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('performance', { 
      id_performance: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      speed_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      error_apps: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      error_apps_response: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      crash_apps: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      crash_apps_response: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_biodata: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'biodata',
          key: 'id_biodata'
        },
        onUpdate: 'CASECADE',
        onDelete: 'SET NULL'
      },
      id_apps: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'apss',
          key: 'id_apps'
        },
        onUpdate: 'CASECADE',
        onDelete: 'SET NULL'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
