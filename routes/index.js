const fs = require("fs");
const path = require("path");
var express = require('express');

module.exports = (app, models) => {
	fs
	  .readdirSync(__dirname)
	  .filter((file) => {
	    return file !== "index.js";
	  })
	  .forEach((file) => {
	    const includeRouter = require(path.join(__dirname, file));
	    const router = includeRouter(models)

	    app.use('/api', router);
	  });

	return app;
}
