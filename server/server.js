const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

console.log("server file running");


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })

  //empty array for data
  let calculations = [];

  // define routes (endpoints)
  app.get('/calculations', (req, res) => {
    console.log('in /calculations GET')
    res.send(calculations)
  });

  //POST
  app.post('/addCalculations', (req, res) => { 
    console.log('in post', req.body);
    let firstNumberInput = Number(req.body.firstNumberInput);
    let sign = (req.body.sign);
    let secondNumberInput = Number(req.body.secondNumberInput);
    

    calculations.push(req.body);
    res.sendStatus(201);
    
    //LOGIC GOES HERE
    if ()



  });