const fs = require("fs");
const path = require("path");

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

	app.use((req, res) => {
		res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
	});

	return app;
}
