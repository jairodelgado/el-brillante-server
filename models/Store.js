const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Store extends Model {
    static associate(models) {

      /* Store one-to-many Address */
      models.Store.hasMany(models.Address);
      models.Address.belongsTo(models.Store);

      /* Store one-to-many ItemBalance */
      models.Store.hasMany(models.ItemBalance);
      models.ItemBalance.belongsTo(models.Store, {
        foreignKey: {
          allowNull: false
        }
      });

      /* Store one-to-many Photo */
      models.Store.hasMany(models.Photo);
      models.Photo.belongsTo(models.Store);
    }
  }

  Store.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    languaje: {
      type: DataTypes.STRING
    },
    domain: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Store'
  });

  return Store;
};
