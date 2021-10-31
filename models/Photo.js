const { DataTypes, Model } = require('sequelize');
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

module.exports = (connection) => {
  class Photo extends Model {}

  Photo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.VIRTUAL,
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    main: {
      type: DataTypes.BOOLEAN
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Photo',
    hooks: {
      afterFind: async function(photos) {
        if(photos.constructor === Array) {
          for (var i = 0; i < photos.length; i++) {
            photos[i].url = config.uploadURL + "/photo." + String(photos[i].id);
          }
        } else {
            photos.url = config.uploadURL + "/photo." + String(photos.id);
        }

        return photos;
      }
    }
  });

  return Photo;
};
