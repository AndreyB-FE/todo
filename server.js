const express = require('express');
const bodyParser = require("body-parser");
const cors=require("cors");
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const PORT = 8000;
const app = express();
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
let sql;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = new sqlite3.Database('./todoAPP.db',sqlite3,(err)=>{
  if (err) return console.err(err.message);
});  

// sql = `CREATE TABLE users(ID INTEGER PRIMARY KEY, userName,password)`;
// db.run(sql);

// sql = `DELETE FROM users WHERE id=?`;
// sql = `INSERT INTO users (userName,passwordHASH) VALUES (?,?)`

// const password = 'shrek2200211022000';
// const name = 'andrei';


// async function compare(){
//   const promise = new Promise((res,rej)=>{
//     db.all(sql,['andrei'],(err,data)=>{
//       res(data[0]);
//     });
//   });
//   promise.then((user)=>{
//     const validPass = bcrypt.compare(password,user.passwordHash);
//     return validPass;
//   }).then((pass)=>{
//     return console.log(pass)
//   })
// }
//  compare();
 

 app.get('/', (req, res) => {
     res.send('Well done!');
 })

app.post("/login", function (request, response) {
  if (!request.body) return response.sendStatus(400);
  sql = `SELECT * FROM users WHERE userName = ?`;
  const promise = new Promise((res,rej)=>{
    db.all(sql,[request.body.userName],(err,data)=>{
      res(data[0]);
    });
  });
  promise.then((user)=>{
    if (!user) throw Error(data.status.toString());
    const validPass = bcrypt.compare(request.body.password,user.passwordHash);
    return validPass;
  }).then((pass)=>{
    if(pass) return response.sendStatus(200)
    else return response.sendStatus(208)
  }).catch((e) => {
    // rej(data);
  });
  console.log(req.body);
});
 
 app.listen(PORT, () => {
     console.log(`The application is listening on port ${PORT}!`);
 })
// async function insertHashData(){
//   const hash = await bcrypt.hash(password,16);
//   await db.run(sql,[name,hash]);
// }
// insertHashData();

