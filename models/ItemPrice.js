const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ItemPrice extends Model {}

  ItemPrice.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    currency: {
      type: DataTypes.STRING,
    },
    retailPrice: {
      type: DataTypes.FLOAT
    },
    salesPrice: {
      type: DataTypes.FLOAT
    },
    minimumDiscountPrice: {
      type: DataTypes.FLOAT
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'ItemPrice'
  });

  return ItemPrice;
};
