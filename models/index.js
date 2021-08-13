const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

var sequelize = new Sequelize(config.database, config.username, config.password, config);
var models = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file !== "index.js";
  })
  .forEach((file) => {
    const defineModel = require(path.join(__dirname, file));
    let model = defineModel(sequelize);

    models[model.name] = model;
  });

for (const [name, model] of Object.entries(models)) {
  if ("associate" in model) {
    model.associate(models);
  }
}

sequelize.sync();

module.exports = models;
