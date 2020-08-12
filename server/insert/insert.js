let mongodb= require('mongodb');
let naresh= mongodb.MongoClient;
const maogoose= require('mongoose');
const URL= 'mongodb+srv://HelloRahul:JqkkLjhSggDAuw9v@clustor0.1hlyz.mongodb.net/online?retryWrites=true&w=majority';
let insert = require('express').Router().post('/',(req,res)=>{
   naresh.connect(URL,(err,db)=>{
       if(err) throw err;
       else{
           db.collection('employees').insertOne({'firstName':req.body.firstName,'lastName':req.body.lastName,
         'email':req.body.email, 'phone':req.body.phone},(err,result)=>{
            if(err) throw err;
            else{
                res.send({insert:"success"})
            }
         });
       }
   });
});

module.exports=insert;