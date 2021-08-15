
const { Logger } = require('./helpers');
const { MorganMiddleware } = require('./middlewares');
const { Mongodb } = require('./database');
const { TodoRoutes } = require('./routes');

class App {
  constructor({
    config,
    express,
    mongoose,
    morgan,
    winston,
  }) {

    // express app
    this.app = express();
    this.app.use(express.json());

    // config
    this.config = config;

    // logger
    this.middleware = (new MorganMiddleware(config, winston, morgan)).middleware;
    this.logger = (new Logger(config, winston)).logger;
    this.app.use(this.middleware);

    // router
    this.router = express.Router();

    // mongoose
    this.mongoose = mongoose;
  }

  init() {

    // apply routes
    const todoRoutes = new TodoRoutes(this.router);
    this.app.use('/todos', todoRoutes.router);

    // initiate server
    this.app.listen(this.config.server.port, async () => {
      
      this.logger.info(`App listening on port ${this.config.server.port}`);
      
      const mongodb = new Mongodb(this.config.db, this.mongoose);
      await mongodb.connect();

      mongodb.connection.on('error', (err) => this.logger.error(err));
      mongodb.connection.on('connected', () => this.logger.info('connected to mongodb'));
    });
  };
};

module.exports = App;