const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.write("Name: HS1");

  // conn.write("Move: up"); hard coded move

  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
