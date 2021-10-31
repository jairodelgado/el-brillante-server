const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

module.exports = (models) => {
  return Builder('/addresses', models, models.Address, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterBy({by: ['StoreId']})
          .filterBy({by: ['AppUserId']})
          .produce()
}