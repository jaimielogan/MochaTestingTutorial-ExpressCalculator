var express = require('express');
var router = express.Router();

var add = function(a,b){
  return (a+b).toString();
};

var sub = function(a,b){
  return (a-b).toString();
};

var mult = function(a,b){
  return (a*b).toString();
};

var div = function(a,b){
  return (a/b).toString();
};

// Create middleare to validate the route
// Updated so that if any operator is used, this error will catch
router.post('/:operator/', (req,res,next) => {
  if(!req.body.num1 && !req.body.num2){
    res.status(432).json({message: 'No data'});
  }
  next();
});


// Calculator routes
// router.post('/add', (req,res,next) => {
//   res.json({result: req.body.num1 + req.body.num2});
// });

router.post('/:operator/:num1/:num2', function(req, res){
  var number1 = req.params.num1;
  var number2 = req.params.num2;
  number1 = Number(number1);
  number2 = Number(number2);

  if(req.params.operator === "add"){
    res.json({result: Number(add(number1,number2))});
  }
  if(req.params.operator === "sub"){
    res.json({result: Number(sub(number1,number2))});
  }
  if(req.params.operator === "mult"){
    res.json({result: Number(mult(number1,number2))});
  }
  if(req.params.operator === "div"){
    res.json({result: Number(div(number1,number2))});
  }

});


module.exports = router;
