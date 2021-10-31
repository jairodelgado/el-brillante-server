const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

const filter = data => {
  delete data.id;
  delete data.onOrder;
  delete data.unitCost;
  delete data.commited;

  return data;
}

module.exports = (models) => {
  return Builder('/item-balances', models, models.ItemBalance, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create()
          .update()
          .delete()
          .filterBy({by: ['StoreId'], add: [models.Item]})
          .filterBy({by: ['ItemId']})
          .produce()
}