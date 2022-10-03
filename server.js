const sqlite3 = require('sqlite3').verbose();
let sql;
const db = new sqlite3.Database('./test.db',sqlite3.OPEN_READWRITE,(err)=>{
  if (err) return console.err(err.message);
});  

// sql = `CREATE TABLE users(ID INTEGER PRIMARY KEY, userName,password)`;
// db.run(sql);

// sql = `DELETE FROM users WHERE id=?`;
sql = `UPDATE users SET id=? WHERE id=?`

db.run(sql,[2,3],(err)=>{
  if (err) return console.err(err.message);
});  