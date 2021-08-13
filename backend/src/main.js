const config = require('./config');
const { Mongodb } = require('./database');
const { TodoRoutes } = require('./routes');

class App {
  constructor(express) {
    this.app = express();
    this.app.use(express.json());
    this.router = express.Router();
  }

  init() {
    const todoRoutes = new TodoRoutes(this.router);
    
    this.app.use('/todos', todoRoutes.router);

    this.app.listen(config.server.port, async () => {
      
      console.log(JSON.stringify(config));
      
      const mongodb = new Mongodb(config.db);
      await mongodb.connect();


      const conn = mongodb.connection;
      conn.on("error", console.error.bind(console, "connection error: "));
    
      console.log(`App listening on port ${config.server.port}`);
    });
  };
};

module.exports = App;