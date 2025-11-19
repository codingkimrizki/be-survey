'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Hapus kolom name_apps (kalau ada)
    await queryInterface.removeColumn('apps', 'name_apps').catch(() => {});

    // 2. Tambah kolom id_master_apps
    await queryInterface.addColumn('apps', 'id_master_apps', {
      type: Sequelize.INTEGER,
      references: {
        model: 'master_apps',
        key: 'id_master_apps'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });

    // 3. Pastikan FK id_biodata sudah sesuai (opsional, aman kalau dilewatin)
    await queryInterface.changeColumn('apps', 'id_biodata', {
      type: Sequelize.INTEGER,
      references: {
        model: 'biodata',
        key: 'id_biodata'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // rollback: hapus kolom baru
    await queryInterface.removeColumn('apps', 'id_master_apps');

    // rollback: tambahkan nama kolom lama
    await queryInterface.addColumn('apps', 'name_apps', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  }
};
