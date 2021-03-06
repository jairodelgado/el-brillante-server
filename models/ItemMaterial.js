const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class ItemMaterial extends Model {}

  ItemMaterial.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
