"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _productRouter = _interopRequireDefault(require("./routers/productRouter.js"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter.js"));

var app = (0, _express["default"])();

_mongoose["default"].connect(process.env.MONGODB_URL || "mongodb://localhost/gamer", {
  useNewUrlParser: true,
  //get rid of deprecated warnings
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.get("/", function (req, res) {
  res.send("Server is ready");
});
app.use("/api/users", _userRouter["default"]);
app.use("/api/products", _productRouter["default"]); // expressAsyncHandler will use this

app.use(function (err, req, res, next) {
  res.status(500).send({
    message: err.message
  });
});
var port = process.envPORT || 5000;
app.listen(port, function () {
  console.log("Serve at http://localhost:".concat(port));
});