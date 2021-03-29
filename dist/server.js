"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/api/products/:id", function (req, res) {
  var product = _data["default"].products.find(function (x) {
    return x._id === req.params.id;
  });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      message: "Product Not Found"
    });
  }
});
app.get("/api/products", function (req, res) {
  res.send(_data["default"].products);
});
app.get("/", function (req, res) {
  res.send("Server is ready");
});
var port = process.envPORT || 5000;
app.listen(port, function () {
  console.log("Serve at http://localhost:".concat(port));
});