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
        title: 'category 1',
      },
      {
        id: 2,
        title: 'category 2',
      },
    ]);

    await queryInterface.bulkInsert('contents', [
      {
        id: 101,
        title: 'tt 1',
        body: 'bb 1',
        categoryId: 1,
      },
      {
        id: 102,
        title: 'tt 2',
        body: 'bb 2',
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

    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'category',
      { id: { [Op.in]: [1, 2] } },
      {},
    );

    await queryInterface.bulkDelete(
      'contents',
      { id: { [Op.in]: [101, 102] } },
      {},
    );
  },
};
