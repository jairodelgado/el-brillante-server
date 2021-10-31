const { DataTypes, Model } = require('sequelize');

async function calculateMinimumDiscount(item) {
  const materials = await item.getMaterials();
  var total = 0;

  for(var i = 0; i < materials.length; i++) {
    total += materials[i].ItemMaterial.compositionPercent * materials[i].currentPrice / 100;
  }

  return total;
}

module.exports = (connection) => {
  class Item extends Model {
    static associate(models) {

      /* Item one-to-many Photo */
      models.Item.hasMany(models.Photo);
      models.Photo.belongsTo(models.Item);

      /* Item one-to-many ItemBalance */
      models.Item.hasMany(models.ItemBalance);
      models.ItemBalance.belongsTo(models.Item);

      /* Item one-to-many ItemMaterial */
      models.Item.hasMany(models.ItemMaterial);
      models.ItemMaterial.belongsTo(models.Item, {
        foreignKey: {
          allowNull: false
        }
      });

      models.Item.belongsToMany(models.Material, { through: models.ItemMaterial });
      models.Material.belongsToMany(models.Item, { through: models.ItemMaterial });

      /* Item one-to-many ItemProduct */
      models.Item.hasMany(models.ItemProduct);
      models.ItemProduct.belongsTo(models.Item, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }

  Item.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    number: {
      type: DataTypes.STRING
    },
    uom: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    defaultCost: {
      type: DataTypes.INTEGER
    },
    discountable: {
      type: DataTypes.BOOLEAN
    },
    isProduct: {
      type: DataTypes.BOOLEAN
    },
    effectiveDate:{
      type: DataTypes.DATE
    },
    finalSale: {
      type: DataTypes.BOOLEAN
    },
    cartonHeight: {
      type: DataTypes.FLOAT
    },
    cartonWeight: {
      type: DataTypes.FLOAT
    },
    inventoried: {
      type: DataTypes.BOOLEAN
    },
    description: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.FLOAT
    },
    makeBuy: {
      type: DataTypes.BOOLEAN
    },
    minimumOrderQty: {
      type: DataTypes.INTEGER
    },
    obsolete: {
      type: DataTypes.BOOLEAN
    },
    originCountry: {
      type: DataTypes.STRING
    },
    shipable: {
      type: DataTypes.BOOLEAN
    },
    volume: {
      type: DataTypes.FLOAT
    },
    webActive: {
      type: DataTypes.BOOLEAN
    },
    webActiveDescription: {
      type: DataTypes.STRING
    },
    zeroPrice: {
      type: DataTypes.BOOLEAN
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    minimumDiscount: {
      type: DataTypes.VIRTUAL
    },
    salesPrice: {
      type: DataTypes.FLOAT
    },
    retailPrice: {
      type: DataTypes.FLOAT
    },
  }, {
    sequelize: connection,
    modelName: 'Item',
    hooks: {
      afterCreate: (item, options) => {
        return item.update({ number: item.id.toString().padStart(8, 0) })
      },
      afterFind: async function(items) {
        if(items.constructor === Array) {
          for (var i = 0; i < items.length; i++) {
            items[i].minimumDiscount = await calculateMinimumDiscount(items[i]);
          }
        } else {
            items.minimumDiscount = await calculateMinimumDiscount(items);
        }

        return items;
      }
    }
  });

  return Item;
};
