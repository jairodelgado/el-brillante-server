const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/product-tag-product', models, models.ProductTagProduct, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterBy({by: ['ProductId'], add: [models.ProductTag]})
          .filterBy({by:['ProductTagId']})
          .produce()
}