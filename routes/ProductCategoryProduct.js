const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/product-category-product', models, models.ProductCategoryProduct, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterBy({by: ['ProductId'], add: [models.ProductCategory]})
          .filterBy({by: ['ProductCategoryId']})
          .produce()
}