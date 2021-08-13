'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductCategories', [{
      id: 1,
      category: 'Worst',
      type: 'core',
      description: 'Products that are worst.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      category: 'Regular',
      type: 'core',
      description: 'Products that are regular.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      category: 'Good',
      type: 'core',
      description: 'Products that are good.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      category: 'Best',
      type: 'core',
      description: 'Products that are of the best quality.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
