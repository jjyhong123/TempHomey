var path = require("path");
var db = require("../models");
const financeQuestions = require("../public/js/financeQuestions");
const cleanlinessQuestions = require("../public/js/cleanlinessQuestions");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  // Load registration page
  app.get("/registration", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/registration.html"));
  });

  // Load finance questions
  app.get("/finance", function (req, res) {
    let hbsObject = {
      questions: financeQuestions
    };
    res.render("finance", hbsObject);
  });

  // Load cleanliness questions
  app.get("/cleanliness", function (req, res) {
    let hbsObject = {
      questions: cleanlinessQuestions
    };
    res.render("cleanliness", hbsObject);
  });

  // Load personality form
  app.get("/personality", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/personality.html"));
  });

    // Load matches page
    app.get("/matches", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/html/matches.html"));
    });

  // Load dashboard form
  app.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
  });

  // Load account info form
  app.get("/account", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/account.html"));
  });

  // Load logout screen
  app.get("/logout", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/logout.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
