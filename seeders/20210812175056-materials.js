'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materials', [{
      id: 1,
      name: 'Gold',
      description: 'Products that made of gold.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Bronce',
      description: 'Products that made of bronce.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Iron',
      description: 'Products that made of iron.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Steel',
      description: 'Products that made of steel.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Materials', null, {});
  }
};
