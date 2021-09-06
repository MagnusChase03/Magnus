FROM ubuntu
WORKDIR /MagnusHub
RUN apt update
RUN apt -y install nodejs
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
