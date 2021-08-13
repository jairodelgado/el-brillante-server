const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/stores', models, models.Store, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .produce()
}