const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/product-tags', models, models.ProductTag, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterByFrom({ by: ['ProductId'], from: models.Product, routeName: '/filter-by-product/', what: (product) => {
            return product.getTags();
          }})
          .produce()
}