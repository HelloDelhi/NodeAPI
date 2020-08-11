let mongodb= require('mongodb');
let naresh= mongodb.MongoClient;
let MongoDB_URI='mongodb+srv://HelloRahul:<password>@clustor0.1hlyz.mongodb.net/<dbname>?retryWrites=true&w=majority';
let update= require('express').Router().put('/',(req,res)=>{
   naresh.connect(MongoDB_URI,(err,db)=>{
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