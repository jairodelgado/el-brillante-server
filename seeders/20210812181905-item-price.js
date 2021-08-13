'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemPrices', [{
      id: 1,
      currency: 'USD',
      retailPrice: 35.45,
      salesPrice: 105.0,
      minimumDiscountPrice: 39.0,
      active: true,
      ItemId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      currency: 'USD',
      retailPrice: 65.5,
      salesPrice: 410.0,
      minimumDiscountPrice: 93.0,
      active: true,
      ItemId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      currency: 'USD',
      retailPrice: 59.5,
      salesPrice: 160.0,
      minimumDiscountPrice: 19.0,
      active: true,
      ItemId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      currency: 'USD',
      retailPrice: 53.5,
      salesPrice: 120.0,
      minimumDiscountPrice: 291.0,
      active: true,
      ItemId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemPrices', null, {});
  }
};
