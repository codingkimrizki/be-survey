"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // hapus unique index
    await queryInterface.removeIndex("biodata", "name_biodata");
  },

  async down(queryInterface, Sequelize) {
    // balikin unique index (optional)
    await queryInterface.addIndex("biodata", ["name_biodata"], {
      unique: true,
      name: "name_biodata",
    });
  },
};
