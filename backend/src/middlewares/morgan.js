const { Logger } = require('../helpers');

class MorganMiddleware {
  constructor(config, winston, morgan) {
    this.morgan = morgan;
    this.logger = (new Logger(config, winston)).logger;
  }

  get middleware() {
    const stream = {
      write: (message) => this.logger.http(message),
    };
    return this.morgan(
      ":method :url :status :res[content-length] - :response-time ms",
      { stream },
    );
  }
};

module.exports = MorganMiddleware;