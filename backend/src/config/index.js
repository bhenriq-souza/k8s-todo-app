// module.exports = {
//   server: {
//     port: 4200,
//   },
//   db: {
//     database: 'cop-kubernetes',
//     host: 'localhost:27017',
//     username: 'cop-kubernetes-user',
//     password: 'cop-kubernetes123456',
//   },
// };

module.exports = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};