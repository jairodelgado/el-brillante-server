const { DataTypes, Model } = require('sequelize');

async function calculateCurrentPrice(material) {
  const prices = await material.getPriceSettings();

  for (const price of prices) {
    if (price.active) {
      return price.cost;
    }
  }
  
  return 0;
}

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

      /* Material one-to-many ItemMaterial */
      models.Material.hasMany(models.ItemMaterial);
      models.ItemMaterial.belongsTo(models.Material, {
        foreignKey: {
          allowNull: false
        }
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
    currentPrice: {
      type: DataTypes.VIRTUAL
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Material',
    hooks: {
      afterFind: async function(materials) {
        if(materials.constructor === Array) {
          for (var i = 0; i < materials.length; i++) {
            materials[i].currentPrice = await calculateCurrentPrice(materials[i]);
          }
        } else {
            materials.currentPrice = await calculateCurrentPrice(materials);
        }

        return materials;
      }
    }
  });

  return Material;
};
