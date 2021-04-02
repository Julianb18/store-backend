"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _data = _interopRequireDefault(require("../data.js"));

var _userModel = _interopRequireDefault(require("../models/userModel.js"));

var _utils = require("../utils/utils.js");

var userRouter = _express["default"].Router();

userRouter.get("/seed", (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var createdUsers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _userModel["default"].insertMany(_data["default"].users);

          case 2:
            createdUsers = _context.sent;
            res.send({
              createdUsers: createdUsers
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
userRouter.post("/signin", (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _userModel["default"].findOne({
              email: req.body.email
            });

          case 2:
            user = _context2.sent;

            if (!user) {
              _context2.next = 7;
              break;
            }

            if (!_bcryptjs["default"].compareSync(req.body.password, user.password)) {
              _context2.next = 7;
              break;
            }

            res.send({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: (0, _utils.generateToken)(user)
            });
            return _context2.abrupt("return");

          case 7:
            res.status(401).send({
              message: "Invalid email or password"
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));
var _default = userRouter;
exports["default"] = _default;