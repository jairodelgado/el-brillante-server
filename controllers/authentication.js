var express = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

class Authentication {
  constructor(User) {
    this.User = User
    this.router = express.Router();
  }

  login(routeName = '/login') {
    this.router.route(routeName).post((req, res) => {
      const {email, password} = req.body;

      this.User.findOne({
        where: {
          email: email
        }
      })
      .then((user) => {
        if (!user)
        {
          return Promise.reject(new Error("Wrong user name or password."));
        } 

        if (bcrypt.compareSync(password, user.password)) {
          const payload = {id: user.id, role: user.role};
          const token = jwt.sign(payload, config.TOKEN_SECRET, { expiresIn: 4 * 60 * 60 });
          return res.status(200).send({ access_token: token, user: user });
        }

        return Promise.reject(new Error("Wrong user name or password."));
      })
      .catch((exception) => {
        res.status(400).json({error: exception.message});
      });
    });

    this.router.route(routeName + "/with-token").post((req, res) => {
      const token = req.body.token;

      if (token === 'null' || !token) return res.status(401).json({msg: 'Unauthorized request.'});
      let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
      if (!verifiedUser) return res.status(401).json({msg: 'Unauthorized request.'})
      const user = verifiedUser;

      this.User.findOne({
        where: {
          id: user.id
        }
      })
      .then((user) => {
        if (!user)
        {
          return Promise.reject(new Error("Wrong token. Token is OK but provided user ID is not."));
        }

        const payload = {id: user.id, role: user.role};
        const token = jwt.sign(payload, config.TOKEN_SECRET, { expiresIn: 4 * 60 * 60 });

        return res.status(200).send({ access_token: token, user: user });
      })
      .catch((exception) => {
        res.status(400).json({error: exception.message});
      });
    });

    return this;
  }

  produce() {
    return this.router;
  }
}

module.exports = (User) => {
  return new Authentication(User);
}