const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductTagProduct extends Model {}

  ProductTagProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize: connection,
    modelName: 'ProductTagProduct'
  });

  return ProductTagProduct;
};
