var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "9005284014Ivo$",
  database: "burgers_db"
});
};

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;