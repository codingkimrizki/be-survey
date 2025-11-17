'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('usefulness', { 
      id_usefulness: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      frequently_use_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      feature_helpfulness: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      feature_helpfulness_response: {
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
    await queryInterface.dropTable('usefulness');
  }
};
