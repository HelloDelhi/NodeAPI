let mongodb= require('mongodb');
let naresh= mongodb.MongoClient;
let MongoDB_URI='mongodb+srv://HelloRahul:<password>@clustor0.1hlyz.mongodb.net/<dbname>?retryWrites=true&w=majority';
let insert = require('express').Router().post('/',(req,res)=>{
   naresh.connect(MongoDB_URI,(err,db)=>{
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