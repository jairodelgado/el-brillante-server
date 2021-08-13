const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class PriceSetting extends Model {}

  PriceSetting.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    cost: {
      type: DataTypes.FLOAT
    },
    season: {
      type: DataTypes.STRING
    },
    ulom: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'PriceSetting'
  });

  return PriceSetting;
};
