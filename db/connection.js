const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // Your MySQL username,
      user: "root",
      // Your MySQL password
      password: "Se419941.",
      database: "employee_tracker",
    },
);

module.exports = db;