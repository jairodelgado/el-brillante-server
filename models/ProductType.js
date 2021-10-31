const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ProductType extends Model {
    static associate(models) {

      /* ProductType one-to-many Product */
      models.ProductType.hasMany(models.Product);
      models.Product.belongsTo(models.ProductType, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }

  ProductType.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    suffix: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isAlpha: true,
        len: [2-2]
      }
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
