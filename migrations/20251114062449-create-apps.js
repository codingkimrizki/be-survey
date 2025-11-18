'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('apps', { 
      id_apps: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_apps: {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('apps');
  }
};
