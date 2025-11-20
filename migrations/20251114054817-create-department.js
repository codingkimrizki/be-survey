'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('department', { 
      id_department: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name_department: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: Sequelize.DATE,
      updateAt: Sequelize.DATE 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('department');
  }
};
