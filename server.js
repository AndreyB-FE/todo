const express = require('express');
const bodyParser = require("body-parser");
const cors=require("cors");
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const PORT = 8000;
const app = express();
const corsOptions ={
  origin:'*', 
  credentials:true,          
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

sql = `DELETE FROM users`;
// sql = `INSERT INTO users (userName,passwordHASH) VALUES (?,?)`

const password = 'shrek2200211022000';
const name = 'andrey';

  db.all(sql,(err) => {
    if (err) console.error(err);
  }) 



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
      if(err) rej(err);
      res(data[0]);
    });
  });
  promise.then((user)=>{
    if (!user) return false;
    const validPass = bcrypt.compare(request.body.password,user.password);
    return validPass;
  }).then((pass)=>{
    if(pass) return response.sendStatus(200)
    else return response.sendStatus(403)
  }).catch((e) => {
    console.log(e)
  });
});

app.post("/registration", function (request, response) {
  console.log(request.body);
  if (!request.body) return response.sendStatus(400);
  sql = `SELECT * FROM users WHERE userName = ?`;
  const promise = new Promise((res,rej)=>{
    db.all(sql,[request.body.userName],(err,data)=>{
      if(err) rej(err);
      res(data[0]);
    });
  });
  promise.then((user)=>{
    console.log(user)
    if (!user){
      sql = `INSERT INTO users (userName,userEmail,password) VALUES (?,?,?)`
      db.run(sql,[request.body.userName, request.body.userName,request.body.password],(err,data)=>{
      if(err) console.log(err);
      return (data);
    });
    }
    else if (user.userName === request.body.userName) return response.sendStatus(409);
    
  }).then(()=>{
    return response.sendStatus(200)
  }).catch((e) => {
    console.log(e)
  });
});


// sql = `INSERT INTO users (userName,userEmail,password) VALUES (?,?,?)`

// async function insertHashData(){
//   const hash = await bcrypt.hash(password,16);
//   await db.run(sql,[name,'andrei.228.bogushevich@gmail.com',hash]);
// }
// insertHashData();
 
 app.listen(PORT, () => {
     console.log(`The application is listening on port ${PORT}!`);
 })


