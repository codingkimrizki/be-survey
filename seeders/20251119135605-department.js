'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('department', [
      {
        name_department: 'Production Engineering',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Part Manufacturing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Production Control',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Quality Assurance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Personal General Affair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Assembly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Purchasing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_department: 'Finance',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);

  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('department', null, {});
  }
};
