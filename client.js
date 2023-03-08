const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
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

  conn.on("connect", () => {
    conn.write('Move: up')
  })

  return conn;
};



module.exports = {connect}