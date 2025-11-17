'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('compitibility', { 
      id_compitibility: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      smootly_all_devices: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      smootly_all_devices_response: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      internet_connection_apps: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      internet_connection_apps_response: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
    await queryInterface.dropTable('compitibility');
  }
};
