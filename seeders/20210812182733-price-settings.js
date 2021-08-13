'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PriceSettings', [{
      id: 1,
      type: 'NYC',
      description: 'NYC prices',
      cost: 22.1,
      season: 'Winter',
      ulom: 'ulom1',
      active: true,
      MaterialId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      type: 'Florida',
      description: 'Florida prices',
      cost: 65.1,
      season: 'Winter',
      ulom: 'ulom2',
      active: true,
      MaterialId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      type: 'Washington',
      description: 'Washington prices',
      cost: 73.1,
      season: 'Spring',
      ulom: 'ulom3',
      active: true,
      MaterialId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      type: 'Los Angeles',
      description: 'Los Angeles prices',
      cost: 43.1,
      season: 'Summer',
      ulom: 'ulom4',
      active: true,
      MaterialId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PriceSettings', null, {});
  }
};
