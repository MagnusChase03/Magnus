const express = require("express");
const formidable = require("express-formidable");
const { exec } = require("child_process");

const app = express();
app.use(express.static(__dirname + "/frontEnd"));
app.use(formidable());

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/index.html");
    
});

app.get("/Apps", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/Apps.html");
    
});

app.get("/YoutubeMusicDownloader", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/YoutubeMusicDownloader.html");
    
});

app.post("/YoutubeMusicDownloaderPost", (req, res) => {

    const URL = req.fields["URL"];
    const fileName = req.fields["fileName"];

    console.log("bash backEnd/youtubeMusicDownload.sh " + URL + " " + fileName);
    
    exec("bash backEnd/youtubeMusicDownload.sh " + URL + " " + fileName, (err, stdout, stderr) => {

        console.log(stdout);
        res.download(__dirname + "/backEnd/music/" + fileName + ".mp3");

    });
    
});

app.get("/ProfessorSearch", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/ProfessorSearch.html");
    
});

app.post("/ProfessorSearchPost", (req, res) => {

    const name = req.fields["name"];

    exec("python3 backEnd/ProfessorSearch.py " + name, (err, stdout, stderr) => {

        console.log(stdout);

    });

});

app.listen(3000, "0.0.0.0");
