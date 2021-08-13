const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class AppUser extends Model {
    static associate(models) {

      /* AppUser one-to-many Address */
      models.AppUser.hasMany(models.Address);
      models.Address.belongsTo(models.AppUser);
    }
  }

  AppUser.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    confirmed: {
      type: DataTypes.BOOLEAN
    },
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.DATE
    },
    sex: {
      type: DataTypes.BOOLEAN
    },
    phone: {
      type: DataTypes.STRING
    },
    altphone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validation: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.STRING,
      validation: {
        isIn: [['Admin', 'Salesman', 'Customer']]
      }
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'AppUser'
  });

  return AppUser;
};
