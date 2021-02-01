'use strict';
const mysql = require('mysql');
//local mysql db connection
var dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'priya',
  password: 'priya',
  database: "sample",
  insecureAuth : true
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;