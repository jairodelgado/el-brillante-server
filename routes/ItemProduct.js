const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/item-product', models, models.ItemProduct, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterBy({by: ['ProductId'], add: [models.Item]})
          .filterBy({by: ['ItemId'], add: [models.Product]})
          .produce()
}