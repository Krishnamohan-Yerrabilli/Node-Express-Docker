const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hey there this course is great</h1>");
})

const port = process.env.PORT || 3000;

app.listen(port, () => ("Listening to the port ${PORT}"));
