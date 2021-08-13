const mongoose = require('mongoose');

class Mongodb {
  constructor(dbconfig) {
    this.database = dbconfig.database;
    this.host = dbconfig.host;
    this.username = dbconfig.username;
    this.password = dbconfig.password;
  }

  async connect() {
    const connStr = `mongodb://${this.username}:${this.password}@${this.host}/${this.database}?authSource=admin`;
    this.conn = await mongoose.connect(connStr, {useNewUrlParser: true, useUnifiedTopology: true});
    return this.conn
  }

  get connection() {
    return this.conn.connection;
  }
};

module.exports = Mongodb;