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
    this.router.route(routeName).get((req, res) => {
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
          const token = jwt.sign(payload, config.TOKEN_SECRET, { expiresIn: 60 * 60 });
          return res.status(200).header("auth-token", token).send({ "token": token });
        }

        return Promise.reject(new Error("Wrong user name or password."));
      })
      .catch((exception) => {
        res.status(400).json({message: exception.message});
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