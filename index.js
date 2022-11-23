var express = require('express');
var app = express();
var mysql= require('mysql');
const http = require('http');
const server = http.createServer(app)
const { Server } = require("socket.io");
var bodyParser=require('body-parser');
const io = new Server(server);
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view-engine','ejs');
var os=require('os');
var network=os.networkInterfaces();
var networksIps=[];
for (const Ips of Object.keys(network)) {    
    networksIps.push(network[Ips][1]['address']);
}
const cors = require("cors");
app.use(cors({
  origin: '*'
}));
var corsOptions = {
};
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
app.post('/message', async(req,res)=>{
    // console.log(req.body.msg);
    res.json({ msg:'response2',msgs2:'test' })
})
const PORT = process.env.PORT || 9999;
app.listen(9999, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})