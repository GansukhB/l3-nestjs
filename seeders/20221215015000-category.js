'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('category', [
      {
        id: 1,
        title: 'cat 1',
      },
      {
        id: 2,
        title: 'cat2',
      },
    ]);
    await queryInterface.bulkInsert('contents', [
      {
        title: 'title 3',
        body: 'body: 3',
        categoryId: 1,
      },
      {
        title: 'title 4',
        body: 'body: 4',
        categoryId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
