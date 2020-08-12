let mongodb= require('mongodb');
let naresh= mongodb.MongoClient;
const maogoose= require('mongoose');
const URL= 'mongodb+srv://HelloRahul:JqkkLjhSggDAuw9v@clustor0.1hlyz.mongodb.net/online?retryWrites=true&w=majority';
let update= require('express').Router().put('/',(req,res)=>{
   naresh.connect(URL,(err,db)=>{
      if(err) throw err;
      else{
          db.collection('employees').updateOne({'firstName':req.body.firstName},{$set:{'lastName':req.body.lastName,
        'email':req.body.email,'phone':req.body.phone}},(err,result)=>{
          if(err) throw err;
          else{
              res.send({update:'success'})
          }
        });
      }
   });
});

module.exports=update;