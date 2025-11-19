'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('answers', {
      id_answer: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_apps: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'apps',
          key: 'id_apps'
        }
      },
      id_question: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'questions',
          key: 'id_question'
        }
      },
      answer_value: {
        type: Sequelize.TEXT, 
        allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('answers');
  }
};
