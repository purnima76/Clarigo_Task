var express = require('express');
var bodyParser = require('body-parser');
var app = express();                     //function expression =use with equal to symble(=)
var mysql = require('mysql');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

var con = mysql.createConnection({
    host: 'apidatabase-1.cskgjmehugyr.ap-south-1.rds.amazonaws.com', 
    user: 'admin',
    password: 'admin12345',
    database: 'ClarigoTask'
 });


 con.connect((err)=> {
    if (err){
        console.log(err.message);
    }
    else{
        console.log("connected Successfully....");
    }
});

app.get('/api/ClarigoForm/search-ClarigoTask/', function(req, res) {
    //const sqlQuery = "select * from employee where empID = "+req.params.empID;
    let sqlQuery = "SELECT * FROM ClarigoForm ";
       let query    = con.query(sqlQuery, function(err, result){
         if (err) throw err;
         res.send(JSON.stringify({"status":200, "response" : result}));;
      });
 
  });


  app.post('/api/ClarigoForm/Taskcreate-ClarigoTask/', function(req, res){
    var cData = {
    Address:     req.body.Address,                             //json format
    Country:     req.body.Country, 
    State:       req.body.State,
     City:       req.body.City,
     Zipcode:    req.body.Zipcode
    
     
};

let sqlQuery = "INSERT INTO ClarigoForm SET ?";
let query    = con.query(sqlQuery, cData, function(err, result){
    if (err) throw err;
    res.send(JSON.stringify({"status":200, "response" : result}));

});
});


app.listen(8000,()=>{
    console.log("Server started..");

 });