'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductTypes', [{
      id: 1,
      type: 'Hand',
      description: 'Products to be used in the hands.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      type: 'Hair',
      description: 'Products to be used in the hair.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      type: 'Foot',
      description: 'Products to be used in the foots.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      type: 'Body',
      description: 'Products to be used in the body.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductTypes', null, {});
  }
};
