'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reability', { 
      id_reability:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      error_frequency: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      missing_data_frequency: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      missing_data_frequency_response: {
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
    await queryInterface.dropTable('reability');
  }
};
