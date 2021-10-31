const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductTag extends Model {
    static associate(models) {

      /* ProductCategory one-to-many ProductTagProduct */
      models.ProductCategory.hasMany(models.ProductTagProduct);
      models.ProductTagProduct.belongsTo(models.ProductTag, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }

  ProductTag.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tag: {
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
    modelName: 'ProductTag'
  });

  return ProductTag;
};
