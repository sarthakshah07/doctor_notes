const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express ();
const mysql = require('mysql');
const bcrypt =require('bcrypt');
const { request } = require('express');


const db = mysql.createPool({
    hostname: "localhost",
    user: "root",
    password: "root123",
    database: "patient_record_database"
});
app.use(cors({
    origin: ['http://localhost:3000']
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}))
console.log("456");




app.post("/api/login", (req,res)=>{
    console.log(req);
    res.send("hello");
})
// db.query("SELECT * FROM patient_record_database.users WHERE email =?",  [email], (err,result)=>{
    //     if (err) {
    //         res.send(err);
    //         console.log("abaraka dabaraaaaaaaaaa");
    //         console.log(err);
    //     }
    //      if (result.length==0) {
    //         bcrypt.hash(Name,(err, hash)=>{
    //             db.query(
    //                 "INSERT INTO patient_record_database.users (name,email) VALUES (?,?);"
    //                 [Name,email,hash],
    //                 (err, response) =>{
    //                     if (err) {
    //                         res.send(err);
    //                         console.log("2");
    //                         console.log(err);
    //                     }
    //                     res.send({msg: "success"})
    //                 }
    //             );
    //         });
    //      }else{
    //         res.send({msg: "email is...."})
    //      }
    //     });
    // try {
    //     console.log("123");
    // } catch (error) {
        
    // }
    // const uname= req.body.name;
    // const email= req.body.email;

 app.post("/api/login", (req,res)=>{
    console.log(req);
    res.send("hello");
 })



app.post('/check', (req,res)=>{
    const email = req.body.email;
    const password= req.body.password;

    if(email&&password){
//WHERE email=? AND password=?
    const sqlCheck= "SELECT email,password FROM users WHERE email = ? AND password = ?;"
        db.query(sqlCheck,[email,password],
            (err, result)=>{
                 if (err) {
                
                req.setEncoding({err: err})
                } 
                else{
                    if (result.length > 0) {
                        console.log("errrrrr");
                        res.send(result);
                        console.log("success");
                    }else{
                        res.send({message: "WRONG USERNAME OR PASSWORD"})
                    }
                }
        })    
    }else{
    console.log("not logged");
}

})


 app.get("/userinfo", (req,res)=>{
//    const sqlGetInfo= "SELECT email,password FROM users";
//    db.query(sqlGetInfo, (err,result)=>{
//     console.log(result);
//     res.send(result)
//     console.log("got info");
    

   });





app.post("/register", (req,res)=> {

    const name= req.body.Name
    const email=req.body.email

    const number= req.body.number;
    const password= req.body.password;

    const sqlInsert= "INSERT INTO patient_record_database.users (name,email,contact,password) VALUES (?,?,?,?);";
        db.query(sqlInsert, [name, email,number,password], (err,result)=>{
    if (err) {
        console.log(err);
    }
     console.log(result);
    });
   
});

app.listen(5001, ()=>{console.log("server started at 5000") })