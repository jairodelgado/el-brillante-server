const { DataTypes, Model } = require('sequelize');

async function calculateVirtualsFromItems(product) {
  const items = await product.getItems();
  var weight = 0;
  var minimumDiscount = 0;
  var salesPrice = 0;
  var retailPrice = 0;

  for(var i = 0; i < items.length; i++) {
    weight += items[i].weight;
    minimumDiscount += items[i].minimumDiscount;
    salesPrice += items[i].salesPrice;
    retailPrice += items[i].retailPrice;
  }
  
  return {
    weight: weight,
    minimumDiscount: minimumDiscount,
    salesPrice: salesPrice,
    retailPrice: retailPrice
  };
}

module.exports = (connection) => {
  class Product extends Model {
    static associate(models) {

      /* Product one-to-many ItemProduct */
      models.Product.hasMany(models.ItemProduct);
      models.ItemProduct.belongsTo(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });

      models.Product.belongsToMany(models.Item, { through: models.ItemProduct });
      models.Item.belongsToMany(models.Product, { through: models.ItemProduct });

      /* Product one-to-many ProductCategoryProduct */
      models.Product.hasMany(models.ProductCategoryProduct);
      models.ProductCategoryProduct.belongsTo(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });

      /* Product one-to-many ProductTagProduct */
      models.Product.hasMany(models.ProductTagProduct);
      models.ProductTagProduct.belongsTo(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });

      /* Product one-to-many Photo */
      models.Product.hasMany(models.Photo);
      models.Photo.belongsTo(models.Product);
    }
  }

  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING,
    },
    warrantyDays: {
      type: DataTypes.INTEGER
    },
    webActive: {
      type: DataTypes.BOOLEAN
    },
    webDescription: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.VIRTUAL
    },
    minimumDiscount: {
      type: DataTypes.VIRTUAL
    },
    salesPrice: {
      type: DataTypes.VIRTUAL
    },
    retailPrice: {
      type: DataTypes.VIRTUAL
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize: connection,
    modelName: 'Product',
    hooks: {
      afterCreate: (product, options) => {
        return product.getProductType().then(productType => {
          return product.update({ code: productType.suffix + product.id.toString().padStart(6, 0) })
        })
      },
      afterFind: async function(products) {
        if(products.constructor === Array) {
          for (var i = 0; i < products.length; i++) {
            var virtuals = await calculateVirtualsFromItems(products[i]);
            products[i].weight = virtuals.weight;
            products[i].minimumDiscount = virtuals.minimumDiscount;
            products[i].salesPrice = virtuals.salesPrice;
            products[i].retailPrice = virtuals.retailPrice;
          }
        } else {
            var virtuals = await calculateVirtualsFromItems(products);
            products.weight = virtuals.weight;
            products.minimumDiscount = virtuals.minimumDiscount;
            products.salesPrice = virtuals.salesPrice;
            products.retailPrice = virtuals.retailPrice;
        }

        return products;
      }
    }
  });

  return Product;
};
