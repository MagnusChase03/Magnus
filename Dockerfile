FROM ubuntu
WORKDIR /MagnusHub
RUN apt update
RUN apt -y install nodejs
RUN apt -y install wget
RUN wget http://ftp.us.debian.org/debian/pool/main/y/youtube-dl/youtube-dl_2021.06.06-1_all.deb
RUN apt -y install python3-pkg-resources
RUN dpkg -i youtube-dl_2021.06.06-1_all.deb
RUN apt -y install ffmpeg
RUN apt -y install openjdk-16-jdk
RUN apt -y install openjdk-16-jre
COPY . .
RUN javac backEnd/ProfessorSearch.java
EXPOSE 3000
CMD ["node", "server.js"]
