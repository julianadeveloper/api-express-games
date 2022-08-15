FROM node:16-alpine

USER root 

WORKDIR /home/app/vuaida2

COPY . .


CMD ["node", "app.js"]

EXPOSE 3300