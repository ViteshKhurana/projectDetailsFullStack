var express=require('express');
var app=express();
var cors=require('cors');


var dbconnect=require('./dbcon');
app.use(cors());
app.get('/',function(req,res,err){
    var query="select * from project_details";

    dbconnect.query(query,function(err,data){
        if(err)
            res.send("Error");
        else{
            res.send(data);
        }
    })
});

app.listen('5000');