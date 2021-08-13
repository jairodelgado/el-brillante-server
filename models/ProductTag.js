const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductTag extends Model {
    static associate(models) {

      /* ProductTag many-to-many Product */
      models.ProductTag.belongsToMany(models.Product, {
        through: 'ProductTagProduct'
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
