const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ItemBalance extends Model {}

  ItemBalance.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    allocated: {
      type: DataTypes.INTEGER,
    },
    commited: {
      type: DataTypes.INTEGER
    },
    damaged: {
      type: DataTypes.INTEGER
    },
    inventoryBalance: {
      type: DataTypes.INTEGER
    },
    inventoryLocation: {
      type: DataTypes.STRING
    },
    onOrder: {
      type: DataTypes.INTEGER
    },
    unitCost: {
      type: DataTypes.INTEGER
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'ItemBalance'
  });

  return ItemBalance;
};
