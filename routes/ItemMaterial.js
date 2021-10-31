const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/item-materials', models, models.ItemMaterial, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterBy({by: ['ItemId'], add: [models.Material]})
          .filterBy({by: ['MaterialId']})
          .produce()
}