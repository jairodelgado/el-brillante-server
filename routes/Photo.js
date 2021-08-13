const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")
const File = require("../controllers/files.js")

module.exports = (models) => {
  return Builder('/photos', models, models.Photo, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create(midlewares=[File().upload('photo')])
          .update(midlewares=[File().upload('photo')])
          .filterBy(by = ['ItemId'])
          .filterBy(by = ['StoreId'])
          .filterBy(by = ['ProductId'])
          .delete()
          .produce()
}