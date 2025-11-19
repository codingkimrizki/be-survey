'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_apps', [
      {
        name_master_apps: 'IoT Assembly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_master_apps: 'IoT Plating',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_master_apps: 'IoT Stamping',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_master_apps: 'Booking Meeting Room Apps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_master_apps: 'Production Control Visualizer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_master_apps: 'Job Assignment Board',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_master_apps: 'Temperature & Humidity Apps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_apps', null, {});
  }
};
