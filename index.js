const express = require('express');
const app = express();

const port = process.env.port || 5000;

const chef = require('./data/chef.json');

app.get('/', (req, res)=>{
    res.send(chef);
})







app.listen(port, ()=>{
    console.log("server is running on port:", port);
})