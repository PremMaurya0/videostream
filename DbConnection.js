const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "smartbike"
// });
const con = mysql.createConnection({
    host: "sehealth.cm2q8v55sgd5.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "SEhea63279865",
    database: "a0to3z5f_medical"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  // con.end(function(err) {
  //   if (err) throw err;
  //   console.log("Disconnected!");
  // });
  module.exports = con;