'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {

   options.tableName = 'Reviews';
   await queryInterface.bulkInsert(options, [
    {
      spotId: 1,
      userId: 1,
      review: 'Pool rocked!',
      stars: 5
    },
    {
      spotId: 1,
      userId: 2,
      review: 'ok!',
      stars: 3
    },
    {
      spotId: 1,
      userId: 3,
      review: 'Pool broo!',
      stars: 3
    },
    {
      spotId: 2,
      userId: 1,
      review: 'trash',
      stars: 2
    },
    {
      spotId: 2,
      userId: 2,
      review: 'Amazing!',
      stars: 2
    },
    {
      spotId: 3,
      userId: 3,
      review: 'Happiness died',
      stars: 1
    },
    {
      spotId: 3,
      userId: 2,
      review: 'Happiness sike',
      stars: 1
    },
    {
      spotId: 3,
      userId: 1,
      review: 'Happiness lies',
      stars: 1
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {})
  }
};
