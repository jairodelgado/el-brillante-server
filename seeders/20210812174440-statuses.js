'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [{
      id: 1,
      status: 'Shipped',
      type: 'Dirty',
      description: 'Products that are in waiting.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      status: 'Production',
      type: 'Semi clean',
      description: 'Products in production.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      status: 'Available',
      type: 'Clean',
      description: 'Products that are available.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      status: 'Dirty',
      type: 'Dirty',
      description: 'Products that are not available.',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Statuses', null, {});
  }
};
