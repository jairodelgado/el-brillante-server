const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ItemMaterial extends Model {}

  ItemMaterial.init({
    compositionPercent: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize: connection,
    modelName: 'ItemMaterial'
  });

  return ItemMaterial;
};
