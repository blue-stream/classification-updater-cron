FROM node:latest

ENV HOME=/home/blue-stream

COPY package*.json $HOME/app/

WORKDIR $HOME/app

RUN npm install --silent --progress=false

COPY . $HOME/app/

CMD ["npm", "start"]