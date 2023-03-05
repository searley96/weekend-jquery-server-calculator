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

  
  
  // empty array for data
//   let calculations = [
//     {
//     firstNumberInput: "",
//     signOperator: "",
//     secondNumberInput: "",
//     answer: "",
//     // history: [],
//   }
// ];

  let calculations = [];
  // console.log("calculations", calculations)

  // define routes (endpoints)
  app.get('/calculations', (req, res) => {
    console.log('in /calculations GET')
    res.send(calculations)
  });

  //POST
  app.post('/addCalculations', (req, res) => { 
    console.log('in post', req.body);
    let firstNumberInput = Number(req.body.firstNumberInput);
    let sign = req.body.signOperator;
    let secondNumberInput = Number(req.body.secondNumberInput);
    let answerValue = 0
    

    // calculations.push(req.body);
    console.log("firstNumberInput", firstNumberInput)
    console.log("secondNumberInput", secondNumberInput)
    
    //LOGIC GOES HERE
 
      if (sign === '+') {
        console.log("sign", sign)
        answerValue = firstNumberInput + secondNumberInput;
        console.log("answer", answerValue)
        req.body.answer = answerValue;
        console.log(req.body)
        calculations.push(req.body);
      }
      else if (sign === '-') {
          console.log("sign", sign)
          answerValue = firstNumberInput - secondNumberInput;
          console.log("answer", answerValue)
          req.body.answer = answerValue;
          console.log(req.body)
          calculations.push(req.body);
      }
      else if (sign === '*') {
            console.log("sign", sign)
            answerValue = firstNumberInput * secondNumberInput;
            console.log("answer", answerValue)
            req.body.answer = answerValue;
            console.log(req.body)
            calculations.push(req.body);
      }
      else if (sign === '/') {
              console.log("sign", sign)
              answerValue = firstNumberInput / secondNumberInput;
              console.log("answer", answerValue)
              req.body.answer = answerValue;
              console.log(req.body)
              calculations.push(req.body);

     }
    console.log("answer", req.body.answer)
    console.log("qnswerValue", answerValue)

    res.sendStatus(201);

  });