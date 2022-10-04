const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
let sql;
const db = new sqlite3.Database('./todoAPP.db',sqlite3,(err)=>{
  if (err) return console.err(err.message);
});  

// sql = `CREATE TABLE users(ID INTEGER PRIMARY KEY, userName,password)`;
// db.run(sql);

// sql = `DELETE FROM users WHERE id=?`;
// sql = `INSERT INTO users (userName,passwordHASH) VALUES (?,?)`

const password = 'shrek2200211022000';
// const name = 'andrei';

sql = `SELECT * FROM users WHERE userName = ?`;


async function compare(){
  const promise = new Promise((res,rej)=>{
    db.all(sql,['andrei'],(err,data)=>{
      res(data[0]);
    });
  });
  promise.then((user)=>{
    const validPass = bcrypt.compare(password,user.passwordHash);
    return validPass;
  }).then((pass)=>{
    return console.log(pass)
  })
}
 compare();

// async function insertHashData(){
//   const hash = await bcrypt.hash(password,16);
//   await db.run(sql,[name,hash]);
// }
// insertHashData();

