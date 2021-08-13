'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductTagProduct', [{
      ProductTagId: 1,
      ProductId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ProductTagId: 2,
      ProductId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ProductTagId: 3,
      ProductId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ProductTagId: 2,
      ProductId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductTagProduct', null, {});
  }
};
