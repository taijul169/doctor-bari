const mysql =  require('mysql2');
const { query } = require('express');
const dotenv =  require('dotenv');
dotenv.config({path:'../config.env'});
var con = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'rootpassword',
    database:'educationinfo'
})
if(con){
    console.log("connection successfull with mysql db. in auth")
}
else{
    throw console.error();
}


const auth = async (req, res, next) =>{
    console.log('i am inside authenticate')
    try {
        console.log("auth is working");
        const token = req.cookies.jwtoken;
        const sql = `SELECT * FROM userinfo WHERE jwtoken = '${token}'`;
        con.query(sql,(err,result)=>{
            console.log("this is mysql error part:",err)
            if(result.length>0){
                req.userData =  result;
                con.query(`SELECT * FROM signature WHERE  designation = 'President' OR designation = 'Secretary' AND status = 1   LIMIT 2 `,(err,signatureData)=>{
                        result[0].president = JSON.stringify(`'${signatureData[0].signature}'`);
                        result[0].secretary = JSON.stringify(`'${signatureData[1].signature}'`);
                        req.userData =  result;  
                   
                });  
                
            }
            else{
                res.redirect('/signin')
            }
           next()
          })   
    } catch (error) {
        res.status(401).render("login")
    }
}

module.exports =  auth;
