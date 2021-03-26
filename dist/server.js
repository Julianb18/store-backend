"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require("express");
// const data = require("./src/data.js");
var app = (0, _express["default"])();
app.get("/api/products", function (req, res) {
  res.send(_data["default"].products);
});
app.get("/", function (req, res) {
  res.send("Server is ready");
});
app.listen(5000, function () {
  console.log("Serve at http://localhost:5000");
});