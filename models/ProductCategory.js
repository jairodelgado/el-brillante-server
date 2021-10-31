const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductCategory extends Model {
    static associate(models) {

      /* ProductCategory one-to-many ProductCategoryProduct */
      models.ProductCategory.hasMany(models.ProductCategoryProduct);
      models.ProductCategoryProduct.belongsTo(models.ProductCategory, {
        foreignKey: {
          allowNull: false
        }
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
