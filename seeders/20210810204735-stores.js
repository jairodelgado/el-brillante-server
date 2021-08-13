'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', [{
      id: 1,
      name: 'Store Vegas',
      email: 'vegas@gmail.com',
      languaje: 'EN',
      domain: '123',
      description: 'Hot',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Store NY',
      email: 'ny@gmail.com',
      languaje: 'EN',
      domain: '123',
      description: 'Cold',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Store Florida',
      email: 'florida@gmail.com',
      languaje: 'ES',
      domain: '123',
      description: 'Beach',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'Store Texas',
      email: 'texas@gmail.com',
      languaje: 'ES',
      domain: '123',
      description: 'Nice',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
