'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('support', { 
      id_support: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      speedly_team_support: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      report_error: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      feedback_team_error: {
        type: Sequelize.BOOLEAN,
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
 
    await queryInterface.dropTable('support');

  }
};
