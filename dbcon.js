const { connect } = require('http2');
const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project_openings'
});

connection.connect(function(err){
    if(err)
        throw err;
    else 
        console.log('connect');
})

module.exports=connection;