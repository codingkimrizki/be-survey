'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_experience', { 
      id_userExperience:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_experience: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      interface_apps: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      interface_apps_response: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      color_icon: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: true,
      },
      color_icon_response: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      satisfaction_apps: {
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
    await queryInterface.dropTable('user_experience');
  }
};
