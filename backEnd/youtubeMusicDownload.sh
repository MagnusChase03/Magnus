webm=$(echo "backEnd/music/$2.webm")
mp3=$(echo "backEnd/music/$2.mp3")

youtube-dl -f 250 $1 -o $webm
ffmpeg -vn -i $webm $mp3
rm $webm