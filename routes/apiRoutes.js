var db = require("../models");
var bcrypt = require('bcrypt')
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function (app) {

  // verify Login Credentials
  app.post("/api/login", function (req, res) {
    db.user.findOne({ where: { email: req.body.login } }).then(function (dbUser) {
      if (!dbUser) {
        res.json({ value: "DNE"})
      }
      else {
        var authenticate = bcrypt.compareSync(req.body.password, dbUser.password)
        res.json({ value: authenticate });
      }
    });
  });

  // add new user
  app.post("/api/newuser", function (req, res) {
    var passHash = bcrypt.hashSync(req.body.password, 10)
    db.user.create({ username: req.body.user, password: passHash, email: req.body.email, phone: req.body.phone, bio: req.body.bio, hobbies: req.body.hobbies, age: req.body.age, gender: req.body.gender, budget: req.body.budget, financeScore: req.body.finance_score, personalityScore: req.body.personality_score, cleanScore: req.body.clean_score, jobTitle: req.body.job_title, employed: req.body.employed, city: req.body.city, zip: req.body.zip }).then(function (dbUser) {
      res.json(dbUser);
    });

  });

  // update user's db row with finance score
  app.put("/api/finance/", function (req, res) {
    db.user.update({ financeScore: req.body.financeScore },
      {
        where: { email: req.body.email }
      }
    )
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // update user's db row with cleanliness score
  app.put("/api/cleanliness/", function (req, res) {
    db.user.update({
      cleanScore: req.body.cleanScore
    }, {
        where: { email: req.body.email }
      }
    )
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // update user's db row with personality type
  app.put("/api/personality/", function (req, res) {
    db.user.update({
      personalityScore: req.body.personalityScore
    }, {
        where: { email: req.body.email }
      }
    )
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // get current user's data from database
  app.post("/api/users/currentuser", function (req, res) {
    db.user.findOne({ where: req.body }).then(function (dbUser) {
      res.json(dbUser);
    });
  })

  // display all users
  app.get("/api/users/", function (req, res) {
    db.user.findAll({})
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // display all users within specified radius
  app.post("/api/users/zip", function (req, res) {
    var obj = req.body;
    var zipArray = obj[Object.keys(obj)[0]];

    db.user.findAll({
      where: {
        zip: {
          [Op.or]: zipArray
        }
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });

  });

  // display all users with specified compatibility level
  app.post("/api/users/personality", function (req, res) {
    var obj = req.body;
    var mbtiArray = obj[Object.keys(obj)[0]];

    db.user.findAll({
      where: {
        personalityScore: {
          [Op.or]: mbtiArray
        }
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });

  });

  // display all users with specified finance score
  app.get("/api/users/finance/:score", function (req, res) {
    db.user.findAll({
      where: { financeScore: req.params.score }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // display all users with specified clean score
  app.get("/api/users/clean/:score", function (req, res) {
    db.user.findAll({
      where: { cleanScore: req.params.score }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

};