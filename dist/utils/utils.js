"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var generateToken = function generateToken(user) {
  return _jsonwebtoken["default"].sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });
};

exports.generateToken = generateToken;