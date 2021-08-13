'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemBalances', [{
      id: 1,
      allocated: 63,
      commited: 24,
      damaged: 52,
      inventoryBalance: 38,
      inventoryLocation: 'NYC',
      onOrder: 83,
      unitCost:4,
      active: true,
      ItemId: 1,
      StoreId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      allocated: 62,
      commited: 22,
      damaged: 45,
      inventoryBalance: 33,
      inventoryLocation: 'NYC',
      onOrder: 83,
      unitCost:4,
      active: true,
      ItemId: 2,
      StoreId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      allocated: 62,
      commited: 24,
      damaged: 85,
      inventoryBalance: 43,
      inventoryLocation: 'NYC',
      onOrder: 8,
      unitCost:4,
      active: true,
      ItemId: 3,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      allocated: 36,
      commited: 26,
      damaged: 53,
      inventoryBalance: 3,
      inventoryLocation: 'NYC',
      onOrder: 81,
      unitCost:4,
      active: true,
      ItemId: 2,
      StoreId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemBalances', null, {});
  }
};
