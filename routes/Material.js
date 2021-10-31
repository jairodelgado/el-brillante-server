const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/materials', models, models.Material, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterByFrom({by: ['ItemId'], from: models.Item, routeName: '/filter-by-item/', what: (item) => {
            return item.getMaterials();
          }})
          .produce()
}