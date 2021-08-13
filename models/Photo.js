const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Photo extends Model {}

  Photo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING,
    },
    source: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Photo'
  });

  return Photo;
};
