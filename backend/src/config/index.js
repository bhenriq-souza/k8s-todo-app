// module.exports = {
//   node: {
//     env: 'development'
//   },
//   server: {
//     port: 4200,
//   },
//   db: {
//     database: 'cop-kubernetes',
//     host: 'localhost:27017',
//     username: 'username',
//     password: '123456789password',
//   },
// };

module.exports = {
  db: {
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  node: {
    env: process.env.NODE_ENV,
  },
  server: {
    port: process.env.SERVER_PORT,
  },
};