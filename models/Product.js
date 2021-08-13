const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Product extends Model {
    static associate(models) {

      /* Product many-to-many Item */
      models.Product.belongsToMany(models.Item, {
        through: 'ItemProduct'
      });

      /* Product many-to-many Category */
      models.Product.belongsToMany(models.ProductCategory, {
        through: 'ProductCategoryProduct'
      });

      /* Product many-to-many Tag */
      models.Product.belongsToMany(models.ProductTag, {
        through: 'ProductTagProduct'
      });
    }
  }

  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING,
    },
    warrantyDays: {
      type: DataTypes.INTEGER
    },
    webActive: {
      type: DataTypes.BOOLEAN
    },
    webDescription: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.FLOAT
    },
    retailPrice: {
      type: DataTypes.FLOAT
    },
    salesPrice: {
      type: DataTypes.FLOAT
    },
    minimumDiscount: {
      type: DataTypes.FLOAT
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Product'
  });

  return Product;
};
