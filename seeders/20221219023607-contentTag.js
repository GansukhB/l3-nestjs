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

    await queryInterface.bulkInsert('tag', [
      {
        id: 1,
        title: 'tag1',
      },
      {
        id: 2,
        title: 'tag2',
      },
    ]);
    await queryInterface.bulkInsert('content_tag', [
      {
        contentId: 1,
        tagId: 1,
      },
      {
        contentId: 2,
        tagId: 2,
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
    await queryInterface.bulkDelete('content_tag', null, {});
    await queryInterface.bulkDelete('tag', null, {});
  },
};
