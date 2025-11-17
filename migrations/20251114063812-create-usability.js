'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usability', { 
      id_performance: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      find_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      easy_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      intuitif_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      learning_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      guide_apps: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('usability');
  }
};
