"use strict";
const express = require("express");

module.exports = function(config) {
  var app = express();
  app.get("/hello-world", (req, res) => res.send("Hello World!"));
  return app;
};
