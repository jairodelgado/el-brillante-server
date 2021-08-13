'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductTags', [{
      id: 1,
      tag: 'Nice',
      type: 'core',
      description: 'Products that are nice.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      tag: 'Sheap',
      type: 'core',
      description: 'Products that are sheap.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      tag: 'Expensive',
      type: 'core',
      description: 'Products that are expensive.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      tag: 'Quality',
      type: 'core',
      description: 'Products that are of the best quality.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductTags', null, {});
  }
};
