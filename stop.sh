docker stop magnushub
docker rm $(docker ps -a -q)
docker system prune
