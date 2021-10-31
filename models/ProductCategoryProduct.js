const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductCategoryProduct extends Model {}

  ProductCategoryProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize: connection,
    modelName: 'ProductCategoryProduct'
  });

  return ProductCategoryProduct;
};
