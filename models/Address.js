const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Address extends Model {}

  Address.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lineOne: {
      type: DataTypes.STRING,
    },
    lineTwo: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zipCode: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Address'
  });

  return Address;
};
