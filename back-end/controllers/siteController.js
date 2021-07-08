const db = require("../models");
const bcrypt = require('bcrypt')

module.exports = {
  findAll: function (req, res) {
    db.Site
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Site
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Site
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Site
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  auth: function (req, res) {
    const { username, password } = req.body.login
    db.Site
      .findById(req.params.id)
      .then((dbModel) => {
        if (dbModel.login.username !== username) {
          return res.json(false)
        }
        bcrypt.compare(password, dbModel.login.password)
          .then(matched => {
            if (matched) {
              return res.json(true)
            } else {
              return res.json(false)
            }
          })
      })
      .catch(err => {
        console.log(err)
      })
  },
  save: function (req, res) {
    const { username, password } = req.body.login
    bcrypt.hash(password, 12)
      .then(hashedPassword => {
        db.Site
          .findOneAndUpdate({ _id: req.params.id }, {
            login: {
              username: username,
              password: hashedPassword
            }
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
  },
  remove: function (req, res) {
    db.Site
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
