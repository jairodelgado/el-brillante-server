const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ItemProduct extends Model {}

  ItemProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize: connection,
    modelName: 'ItemProduct'
  });

  return ItemProduct;
};
