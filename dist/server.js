"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _data = _interopRequireDefault(require("./data.js"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter.js"));

var app = (0, _express["default"])();

_mongoose["default"].connect("mongodb://localhost/gamer", {
  useNewUrlParser: true,
  //get rid of deprecated warnings
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.get("/", function (req, res) {
  res.send("Server is ready");
});
app.get("/api/products", function (req, res) {
  res.send(_data["default"].products);
});
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
app.use("/api/users", _userRouter["default"]);
app.use(function (err, req, res, next) {
  res.status(500).send({
    message: err.message
  });
});
var port = process.envPORT || 5000;
app.listen(port, function () {
  console.log("Serve at http://localhost:".concat(port));
});