const { DataTypes, Model } = require('sequelize');

module.exports = (connection) => {
  class Customer extends Model {}

  Customer.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cardOnFile: {
      type: DataTypes.BOOLEAN
    },
    completeOnly: {
      type: DataTypes.BOOLEAN
    },
    number: {
      type: DataTypes.STRING,
    },
    fullName: {
      type: DataTypes.STRING
    },
    DoNotContact: {
      type: DataTypes.BOOLEAN
    },
    emailInvoice: {
      type: DataTypes.BOOLEAN
    },
    federalId: {
      type: DataTypes.STRING
    },
    invoiceCopies: {
      type: DataTypes.INTEGER
    },
    isRetail: {
      type: DataTypes.BOOLEAN
    },
    languaje: {
      type: DataTypes.STRING
    },
    orderConfirm: {
      type: DataTypes.BOOLEAN
    },
    prospect: {
      type: DataTypes.BOOLEAN
    },
    residential: {
      type: DataTypes.BOOLEAN
    },
    salesTaxGroup: {
      type: DataTypes.STRING
    },
    salesman: {
      type: DataTypes.STRING
    },
    webRegister: {
      type: DataTypes.BOOLEAN
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Customer'
  });

  return Customer;
};
