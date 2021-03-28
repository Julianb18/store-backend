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

const port = process.envPORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
