'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pages', [
      {
        name_page: 'usability',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'performance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'usefulness',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'user_experience',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'reability',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'compatibility',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'support',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_page: 'feedback',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pages', null, {});
  }
};
