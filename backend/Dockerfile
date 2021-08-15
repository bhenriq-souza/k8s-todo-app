FROM node:latest

WORKDIR /node-app

COPY package.json /node-app

RUN npm install

COPY . /node-app

EXPOSE 4200

CMD ["npm", "run", "dev"]