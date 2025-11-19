'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('biodata', { 
      id_biodata: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name_biodata: {
        type: Sequelize.STRING,
        allowNul: true,
        unique: false
      },
      id_department: {
        type: Sequelize.INTEGER,
        references: {
          model: 'department',
          key: 'id_department'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('biodata');
  }
};
