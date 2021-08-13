const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Material extends Model {
    static associate(models) {

      /* Material one-to-many PriceSetting */
      models.Material.hasMany(models.PriceSetting, {
        foreignKey: {
          allowNull: false
        }
      });
      models.PriceSetting.belongsTo(models.Material, {
        foreignKey: {
          allowNull: false
        }
      });

      /* Material many-to-many Item */
      models.Material.belongsToMany(models.Item, {
        through: models.ItemMaterial
      });
    }
  }

  Material.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
    modelName: 'Material'
  });

  return Material;
};
