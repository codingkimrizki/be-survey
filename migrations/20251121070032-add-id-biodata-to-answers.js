"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("answers", "id_biodata", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "biodata",
        key: "id_biodata"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("answers", "id_biodata");
  },
};
