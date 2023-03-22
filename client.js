const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("successfully connnected to the server!")
    // code that does something when the connection is first established
  });

  conn.on("data", (theMessage) => {
    console.log(theMessage);
    // code that does something when the connection is first established
  });

  conn.on("connect", () => {
    conn.write('Name: AJM')
  })

  return conn;
};



module.exports = {connect}