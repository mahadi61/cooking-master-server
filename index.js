const express = require('express');
const app = express();

const port = process.env.port || 5000;

const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json')
app.get('/', (req, res)=>{
    res.send(chef);
})

app.get('/recipes', (req, res)=>{
    res.send(recipes);
})





app.listen(port, ()=>{
    console.log("server is running on port:", port);
})