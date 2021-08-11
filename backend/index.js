const express = require('express');

const config = require('./config');
const { Mongodb } = require('./database');
const { TodoRoutes } = require('./routes');

const router = express.Router();
const todoRoutes = new TodoRoutes(router);

const app = express();

app.use(express.json());

app.use('/todos', todoRoutes.router);

app.listen(config.server.port, async () => {

  const mongodb = new Mongodb(config.db);
  await mongodb.connect();
  const conn = mongodb.connection;
  conn.on("error", console.error.bind(console, "connection error: "));

  console.log(`App listening on port ${config.server.port}`);
});