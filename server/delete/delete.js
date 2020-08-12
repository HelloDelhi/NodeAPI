let mongodb=require('mongodb');
let naresh= mongodb.MongoClient;
const mongoose= require('mongoose');
const URL= 'mongodb+srv://HelloRahul:JqkkLjhSggDAuw9v@clustor0.1hlyz.mongodb.net/online?retryWrites=true&w=majority';
let remove= require('express').Router().delete('/',(req,res)=>{
   mongoose.connect(URL,(err,db)=>{
      if(err) throw err;
      else{
          db.collection('employees').deleteOne({'firstName':req.body.firstName},(err,result)=>{
            if(err) throw err;
            else{
                   res.send({delete:'success'})
            }
          });
      }
   });
});

module.exports=remove;