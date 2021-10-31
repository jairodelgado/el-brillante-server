const Builder = require("../controllers/builder.js");
const Authorization = require("../controllers/authorization.js")

const filterCreate = data => {
  delete data.id;
  delete data.code;
  delete data.retailPrice;
  delete data.salesPrice;
  delete data.minimumDiscount;

  return data;
}

const filterUpdate = data => {
  data = filterCreate(data);
  
  delete data.ProductTypeId;

  return data;
}

module.exports = (models) => {
  return Builder('/products', models, models.Product, Authorization(models.User).authenticated().hasRole(['Admin']).produce())
          .list()
          .retreive()
          .create({filter: filterCreate})
          .update({filter: filterUpdate})
          .delete()
          .produce()
}