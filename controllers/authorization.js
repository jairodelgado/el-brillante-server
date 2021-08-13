const jwt = require('jsonwebtoken')
const fs = require("fs");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

class Authorization {
  constructor(User) {
    this.User = User
    this.middlewares = []
  }

  authenticated() {
    this.middlewares.push((req, res, next) => {
      let token = req.headers.authorization;
      if (!token) return res.status(401).json({msg: "Access Denied / Unauthorized request."});

      try {
          token = token.split(' ')[1]

          if (token === 'null' || !token) return res.status(401).json({msg: 'Unauthorized request.'});

          let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
          if (!verifiedUser) return res.status(401).json({msg: 'Unauthorized request.'})

          req.user = verifiedUser;
          next();

      } catch (error) {
          res.status(400).json({msg: 'Invalid Token.'});
      }
    });

    return this;
  }

  hasRole(roles) {
    this.middlewares.push((req, res, next) => {
      for (let role of roles) {
        if (req.user.role === role) {
          next();
          return;
        }
      }
      return res.status(401).json({msg: "Unauthorized request. Insufficient credentials."});
    });

    return this;
  }

  produce() {
    return this.middlewares;
  }
}

module.exports = (User) => {
  return new Authorization(User);
}