const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Status extends Model {
    static associate(models) {

      /* Status one-to-many Product */
      models.Status.hasMany(models.Product);
      models.Product.belongsTo(models.Status);
    }
  }

  Status.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
    },
    type: {
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
    modelName: 'Status'
  });

  return Status;
};
