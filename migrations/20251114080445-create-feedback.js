'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('feedback', { 
      id_feedback: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      feature_usage_frequency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      useless_feature: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      requested_feature: {
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

    await queryInterface.dropTable('feedback');
  }
};
