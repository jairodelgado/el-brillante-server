const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductCategory extends Model {
    static associate(models) {

      /* ProductCategory many-to-many Product */
      models.ProductCategory.belongsToMany(models.Product, {
        through: 'ProductCategoryProduct'
      });
    }
  }

  ProductCategory.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'ProductCategory'
  });

  return ProductCategory;
};
