const { Client } = require("pg");

const client = new Client({
  host: "54.83.240.104",
  user: "readerUser",
  password: "test2023.1",
  port: 5432,
  keepAlive: true,
  database: "sierra_gorda",
});
client.connect();

module.exports = client;