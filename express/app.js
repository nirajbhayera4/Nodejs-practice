const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000);

//1. what is express ?
// express js is a web framework for node.js that makes it easier to build web servers and API'S