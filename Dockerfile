FROM node:16-alpine

USER root 

WORKDIR /home/app/vuaida2

COPY . .


CMD ["nodemon", "server.js"]

EXPOSE 3300