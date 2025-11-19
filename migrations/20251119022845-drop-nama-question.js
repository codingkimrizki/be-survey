"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questions", {
      id_question: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      page_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pages",
          key: "id_page",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      question_text: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      // tipe pertanyaan: yesno, rating, text, dll
      question_type: {
        type: Sequelize.ENUM("Y/N", "rating", "suggest"),
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("questions");
  },
};
