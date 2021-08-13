const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Employee extends Model {}

  Employee.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING,
    },
    initials: {
      type: DataTypes.STRING
    },
    languaje: {
      type: DataTypes.STRING
    },
    ssn: {
      type: DataTypes.STRING
    },
    hireDate: {
      type: DataTypes.DATE
    },
    terminationDate: {
      type: DataTypes.DATE
    },
    terminationReason: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Employee'
  });

  return Employee;
};
