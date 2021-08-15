const winston = require('winston');

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

class Logger {
  constructor(config, winston) {
    this.config = config;
    this.winston = winston;
    this.winston.addColors(colors);
  }

  level() {
    const env = this.config.node.env || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
  }

  get logger() {
    return this.winston.createLogger({
      level: this.level(),
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.colorize({ all: true }),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
      ),
      transports: [
        new this.winston.transports.Console(),
        new this.winston.transports.File({
          filename: 'backend/logs/error.log',
          level: 'error',
        }),
        new this.winston.transports.File({
          filename: 'backend/logs/all.log'
        }),
      ],
      levels,
    });
  }
};

module.exports = Logger;