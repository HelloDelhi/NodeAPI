let mongodb= require('mongodb')
let naresh=  mongodb.MongoClient

let fetch= require('express').Router().get('/',(req,res)=>{
     naresh.connect("mongodb://localhost:27017/online",(err,db)=>{
        if(err) throw err;
        else{
        db.collection('employees').find().toArray((err,array)=>{
            if(err) throw err;
            else
            {
            res.send(array);
            }
        
        });
    }
     });
});

module.exports=fetch;