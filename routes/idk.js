var db = require("../models");
var bcrypt = require('bcrypt')
module.exports = function (app) {
  var userEmail;
  // verify Login Credentials
  app.get("/api/login", function (req, res) {
    db.user.findOne({ where: { email: req.body.login } }).then(function (dbUser) {
      var authenticate = bcrypt.compareSync(password, dbUser.password)
      if (authenticate === true) {
        console.log("password match")
        return $.ajax({
          type: "GET",
          url: "/finance",
          data: Dbuser
        });
      }
    });

    // update user's db row with finance score
    app.put("/api/finance/", function (req, res) {
      db.user.update({
        financeScore: req.body.finance_score
      }, {
          where: { email: userEmail }
        }
      )
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });

    // update user's db row with cleanliness score
    app.put("/api/cleanliness/", function (req, res) {
      db.user.update({
        cleanScore: req.body.cleanliness_score
      }, {
          where: { email: userEmail }
        }
      )
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });

    // update user's db row with personality type
    app.put("/api/personality/", function (req, res) {
      db.user.update({
        personalityScore: req.body.personality_score
      }, {
          where: { email: userEmail }
        }
      )
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });


    // display all users
    app.get("/api/posts/", function (req, res) {
      db.user.findAll({})
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });

    // add new user
    app.post("/api/newuser", function (req, res) {
      userEmail = req.body.email;
      var passHash = bcrypt.hashSync(req.body.password, 10)

      db.user.create({ username: req.body.user, password: passHash, email: req.body.email, phone: req.body.phone, bio: req.body.bio, hobbies: req.body.hobbies, age: req.body.age, gender: req.body.gender, budget: req.body.budget, financeScore: req.body.finance_score, personalityScore: req.body.personality_score, cleanScore: req.body.clean_score, jobTitle: req.body.job_title, employed: req.body.employed, city: req.body.city, zip: req.body.zip }).then(function (dbUser) {
        res.json(dbUser);
      });

    });

  });
}