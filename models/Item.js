const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Item extends Model {
    static associate(models) {

      /* Item one-to-many Photo */
      models.Item.hasMany(models.Photo);
      models.Photo.belongsTo(models.Item);

      /* Item one-to-many ItemBalance */
      models.Item.hasMany(models.ItemBalance);
      models.ItemBalance.belongsTo(models.Item);

      /* Item many-to-many Material */
      models.Item.belongsToMany(models.Material, {
        through: models.ItemMaterial
      });

      /* Item many-to-many Product */
      models.Item.belongsToMany(models.Product, {
        through: 'ItemProduct'
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
      type: DataTypes.STRING,
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
    }
  }, {
    sequelize: connection,
    modelName: 'Item'
  });

  return Item;
};
