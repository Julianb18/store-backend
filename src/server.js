import express from "express";
import data from "./data.js";

// const express = require("express");
// const data = require("./src/data.js");

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});
