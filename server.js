const express = require("express");
const formidable = require("express-formidable");

const app = express();
app.use(express.static(__dirname + "/frontEnd"));
app.use(formidable());

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/index.html");
    
});

app.get("/YoutubeMusicDownloader", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/YoutubeMusicDownloader.html");
    
});

app.post("/YoutubeMusicDownloaderPost", (req, res) => {

    const URL = req.fields["URL"];
    const fileName = req.fields["fileName"];

    console.log("Attempt at " + URL);
    
});

app.listen(3000, "0.0.0.0");
