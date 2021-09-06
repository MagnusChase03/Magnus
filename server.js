const express = require("express");

const app = express();
app.use(express.static(__dirname + "/frontEnd"));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/index.html");
    
});

app.listen(3000, "0.0.0.0");
