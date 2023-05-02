const express = require('express');
const cors = require("cors")
const app = express();

const port = process.env.port || 5000;

app.use(cors());
const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json')
app.get('/', (req, res)=>{
    res.send(chef);
})

app.get('/:id', (req, res)=>{
    const id = req.params.id;
    const chefData = chef.find(c => c.chef_id == id);
    res.send(chefData);
})


app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id;
    const selected = recipes.filter(r => r.chef_id == id);
    res.send(selected);
})



app.listen(port, ()=>{
    console.log("server is running on port:", port);
})