let mongodb= require('mongodb')
let naresh=  mongodb.MongoClient
let MongoDB_URI='mongodb+srv://HelloRahul:JqkkLjhSggDAuw9v@clustor0.1hlyz.mongodb.net/online?retryWrites=true&w=majority';

let fetch= require('express').Router().get('/',(req,res)=>{
     naresh.connect(MongoDB_URI,(err,db)=>{
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