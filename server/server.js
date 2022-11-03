const express = require("express");

const app = express();
const PORT = process.env.port || 9090;

// Recipe API
let baseURL = app.get("/", (req, res) => {});

app.listen(PORT);
