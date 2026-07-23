const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    const userInput = req.query.input;
    eval(userInput);
    res.send("done");
});