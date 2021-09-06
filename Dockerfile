FROM ubuntu
WORKDIR /MagnusHub
RUN apt update
RUN apt -y install nodejs
RUN apt -y install youtube-dl
RUN apt -y install ffmpeg
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
