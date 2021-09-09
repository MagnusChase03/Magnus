const express = require("express");
const formidable = require("express-formidable");
const fs = require("fs");
const parser = require("node-html-parser").parse;
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

    const schoolName = req.fields["school"];
    const professorName = req.fields["name"];
    const index = req.fields["index"];

    exec("python3 backEnd/ProfessorSearch.py " + professorName + " " + index, (err, stdout, stderr) => {

        if (err) {

            console.log(err);

        }
        
        const professorData = stdout;
        console.log(professorData);

        fs.readFile("frontEnd/ProfessorSearch.html", "utf8", (err, html) => {
         
            const webPage = parser(html);
         
            const content = webPage.querySelector('#form');

            const professorDataSplit = professorData.split("/");
            
            htmlResults = "";
            for (var i = 0; i < professorDataSplit.length; i++) {

                if (i == 0) {

                    htmlResults += "<hr><h3>" + professorDataSplit[i] + "</h3>";


                } else {

                    htmlResults += "<p>" + professorDataSplit[i] + "</p>";

                }

            }

            content.set_content(content.toString() + htmlResults);
         
            res.send(webPage.toString());

        });

    });

});

app.get("/AboutMe", (req, res) => {

    res.sendFile(__dirname + "/frontEnd/AboutMe.html");

});

app.listen(3000, "0.0.0.0");
