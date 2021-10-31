'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      id: 1,
      code: '551',
      warrantyDays: 30,
      webActive: true,
      webDescription: 'Combo of ring and earing',
      description: 'Combo of ring and earing',
      active: true,
      ProductTypeId: 1,
      StatusId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      code: '552',
      warrantyDays: 50,
      webActive: true,
      webDescription: 'Married pack',
      description: 'Married pack',
      active: true,
      ProductTypeId: 2,
      StatusId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      code: '553',
      warrantyDays: 10,
      webActive: true,
      webDescription: 'Deseased pack',
      description: 'Deseased pack',
      active: true,
      ProductTypeId: 3,
      StatusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      code: '554',
      warrantyDays: 90,
      webActive: true,
      webDescription: 'Engaged pack',
      description: 'Engaged pack',
      active: true,
      ProductTypeId: 2,
      StatusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
