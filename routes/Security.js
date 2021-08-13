const Authentication = require("../controllers/authentication.js")

module.exports = (models) => {
  return Authentication(models.AppUser)
          .login()
          .produce()
}

