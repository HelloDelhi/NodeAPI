let mongodb=require('mongodb');
let naresh= mongodb.MongoClient;
let MongoDB_URI='mongodb+srv://HelloRahul:<password>@clustor0.1hlyz.mongodb.net/<dbname>?retryWrites=true&w=majority';
let remove= require('express').Router().delete('/',(req,res)=>{
   naresh.connect(MongoDB_URI,(err,db)=>{
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