'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {

    const salt = bcrypt.genSaltSync(10);
    const dummy_password = bcrypt.hashSync("123", salt);

    return queryInterface.bulkInsert('AppUsers', [{
      id: 1,
      confirmed: true,
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      status: 'Working from home',
      dob: new Date(),
      sex: false,
      phone: '999-1111-1234',
      altphone: '8888-3211-4321',
      email: 'john@gmail.com',
      active: true,
      password: dummy_password,
      role: "Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      confirmed: true,
      firstName: 'Mary',
      middleName: '',
      lastName: 'Smith',
      status: 'In office',
      dob: new Date(),
      sex: true,
      phone: '453-1111-1234',
      altphone: '432-3211-4321',
      email: 'mary@gmail.com',
      active: true,
      password: dummy_password,
      role: "Salesman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      confirmed: false,
      firstName: 'Johana',
      middleName: '',
      lastName: 'McCallen',
      status: 'Sick',
      dob: new Date(),
      sex: true,
      phone: '222-1111-1234',
      altphone: '555-3211-4321',
      email: 'johana@gmail.com',
      active: false,
      password: dummy_password,
      role: "Customer",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      confirmed: true,
      firstName: 'Peter',
      middleName: '',
      lastName: 'Anderson',
      status: 'Resting',
      dob: new Date(),
      sex: false,
      phone: '888-1111-1234',
      altphone: '442-3211-4321',
      email: 'peter@gmail.com',
      active: true,
      password: '123',
      role: "Customer",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AppUsers', null, {});
  }
};