var express = require('express');
var compose = require("compose-middleware").compose;

class Builder {
  constructor(baseName, models, model, middlewares = []) {
    this.baseName = baseName
    this.models = models;
    this.model = model;
    this.router = express.Router();
    this.middlewares = middlewares
  }

  list({routeName = '/', add = [], middlewares = [], handler = null, filter=false} = {}) {
    if (handler) {
      this.router.route(this.baseName + routeName).get(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(this.baseName + routeName).get(compose(this.middlewares.concat(middlewares)), (req, res) => {
        this.model.findAll({
           include: add
        })
        .then((modelList) => {
          if (filter) {
            modelList = modelList.map(filter);
          }
          res.json(modelList);
        })
        .catch((exception) => {
          res.status(400).json({message: exception.message});
        });
      })
    }

    return this;
  }

  filterBy({by, add = [], routeName = '/filter/', error_msg = 'Unknown params provided', middlewares = [], handler = null, filter=false} = {}) {
    let route = this.baseName + routeName

    for(const property of by) {
      route += property + '/:' + property + '/'
    }

    if (handler) {
      this.router.route(route).get(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(route).get(compose(this.middlewares.concat(middlewares)), (req, res) => {
        let where = {}

        for(const property of by) {
          where[property] = req.params[property]
        }

        this.model.findAll({
          where: where,
          include: add
        })
        .then((modelList) => {
          return modelList || Promise.reject( new Error(error_msg) );
        })
        .then((modelList) => {
          if (filter) {
            modelList = modelList.map(filter);
          }

          res.json(modelList);
        })
        .catch((exception) => {
          res.status(400).json({message: exception.message});
        });
      })
    }

    return this;
  }

  filterByFrom({by, from, what, routeName = '/filter-from/', error_msg = 'Unknown params provided', middlewares = [], include=[], handler = null, filter=false} = {}) {
    let route = this.baseName + routeName

    for(const property of by) {
      route += property + '/:' + property + '/'
    }

    if (handler) {
      this.router.route(route).get(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(route).get(compose(this.middlewares.concat(middlewares)), (req, res) => {
        let where = {}

        for(const property of by) {
          where[property] = req.params[property]
        }
        
        this.from.findAll({
          where: where,
          include: include
        })
        .then((modelList) => {
          if (modelList) {
            return what(modelList)
          } else{
            Promise.reject(new Error(error_msg));
          }
        })
        .then((modelList) => {
          if (filter) {
            modelList = modelList.map(filter);
          }
          res.json(modelList);
        })
        .catch((exception) => {
          res.status(400).json({message: exception.message});
        });
      })
    }

    return this;
  }

  create({routeName = '/', middlewares = [], handler = null, filter=false} = {}) {
    if (handler) {
      this.router.route(this.baseName + routeName).post(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(this.baseName + routeName).post(compose(this.middlewares.concat(middlewares)), (req, res) => {
        let data = req.body;

        if (filter) {
          data = filter(req.body);
        }

        this.model.create(data)
        .then((model) => {
            res.json(model);
          })
        .catch((exception) => {
          res.status(400).json({message: exception.message});
        });
      })
    }

    return this;
  }

  retreive({add = [], routeName = '/details/:id', error_msg = 'Unknown id provided', middlewares = [], handler = null, filter=false} = {}) {
    if (handler) {
      this.router.route(this.baseName + routeName).get(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(this.baseName + routeName).get(compose(this.middlewares.concat(middlewares)), (req, res) => {
        this.model.findByPk(req.params.id, {
          include: add
        })
          .then((model) => {
            return model || Promise.reject( new Error(error_msg) );
          })
          .then((model) => {
            if (filter) {
              model = filter(model);
            }
            res.json(model);
          })
          .catch((exception) => {
            res.status(400).json({message: exception.message});
          });
      })
    }

    return this;
  }

  update({routeName = '/details/:id', error_msg = 'Unknown id provided', middlewares = [], handler = null, filter=false} = {}) {
    if (handler) {
      this.router.route(this.baseName + routeName).put(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(this.baseName + routeName).put(compose(this.middlewares.concat(middlewares)), (req, res) => {
        this.model.findByPk(req.params.id)
          .then((model) => {
            return model || Promise.reject( new Error(error_msg) );
          })
          .then((model) => {
            let data = req.body;
            
            if (filter) {
              data = filter(req.body);
            }
            return model.update(data);
          })
          .then((model) => {
            res.json(model);
          })
          .catch((exception) => {
            res.status(400).json({message: exception.message});
          });
      })
    }

    return this;
  }

  delete({routeName = '/details/:id', error_msg = 'Unknown id provided', middlewares = [], handler = null} = {}) {
    if (handler) {
      this.router.route(this.baseName + routeName).delete(compose(this.middlewares.concat(middlewares)), handler)
    } else {
      this.router.route(this.baseName + routeName).delete(compose(this.middlewares.concat(middlewares)), (req, res) => {
        this.model.findByPk(req.params.id)
          .then((model) => {
            return model || Promise.reject(new Error(error_msg));
          })
          .then((model) => {
            return model.destroy();
          })
          .then((model) => {
            res.json(model);
          })
          .catch((exception) => {
            res.status(400).json({message: exception.message});
          });
      })
    }

    return this;
  }

  produce() {
    return this.router;
  }
}

module.exports = (baseName, models, model, middlewares = []) => {
  return new Builder(baseName, models, model, middlewares);
}