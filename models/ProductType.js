const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductType extends Model {
    static associate(models) {

      /* ProductType one-to-many Product */
      models.ProductType.hasMany(models.Product);
      models.Product.belongsTo(models.ProductType);
    }
  }

  ProductType.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'ProductType'
  });

  return ProductType;
};
