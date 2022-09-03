const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>This is an unbeatble course this is gold, I'm learning something here</h1>");
})

const port = process.env.PORT || 3000;

app.listen(port, () => ("Listening to the port ${PORT}"));
