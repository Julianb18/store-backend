"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var data = {
  users: [{
    name: "Julian",
    email: "admin@example.com",
    password: _bcryptjs["default"].hashSync("1234", 8),
    isAdmin: true
  }, {
    name: "Temi",
    email: "user@example.com",
    password: _bcryptjs["default"].hashSync("1234", 8),
    isAdmin: false
  }],
  products: [{
    _id: "1",
    name: "Razer Viper Ultimate",
    category: "Mouse",
    image: "/images/razer.jpg",
    price: 120.95,
    countInStock: 10,
    brand: "Razer",
    rating: 5,
    numReviews: 22,
    description: "In our humble opinion, this is the best gaming mouse on the market right now!"
  }, {
    _id: "2",
    name: "Razer Mamba",
    category: "Mouse",
    image: "/images/razer.jpg",
    price: 80.95,
    countInStock: 23,
    brand: "Razer",
    rating: 4.0,
    numReviews: 13,
    description: "Not a bad mouse at all give it a try"
  }, {
    _id: "3",
    name: "Logitech G903 LIGHTSPEED",
    category: "Mouse",
    image: "/images/logitech.png",
    price: 95.0,
    countInStock: 3,
    brand: "Logitech",
    rating: 4.5,
    numReviews: 10,
    description: "Not a bad mouse at all give it a try"
  }, {
    _id: "4",
    name: "Logitech G PRO Wireless",
    category: "Mouse",
    image: "/images/logitech.png",
    price: 95.95,
    countInStock: 0,
    brand: "Logitech",
    rating: 4.5,
    numReviews: 17,
    description: "Not a bad mouse at all give it a try"
  }, {
    _id: "5",
    name: "Logitech G915 LIGHTSPEED",
    category: "Keyboard",
    image: "/images/logi-keyboard.jpg",
    price: 195.99,
    countInStock: 15,
    brand: "Logitech",
    rating: 4.5,
    numReviews: 12,
    description: "Not a bad keyboard at all give it a try"
  }, {
    _id: "6",
    name: "Razer BlackWidow Elite",
    category: "Keyboard",
    image: "/images/razer-keyboard.jpg",
    price: 124.89,
    countInStock: 13,
    brand: "Razer",
    rating: 4.5,
    numReviews: 14,
    description: "Not a bad keyboard at all give it a try"
  }]
};
var _default = data; // module.exports = data;

exports["default"] = _default;