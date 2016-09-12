var calculateMe = function (calcObject){
  console.log('inside my module');

  var operator = calcObject.type;
  var x = Number(calcObject.x);
  var y = Number(calcObject.y);
  var answer;

  switch (operator) {
    case 'add':
      answer = x + y;
      break;
    case 'subtract':
      answer = x - y;
      break;
    case 'multiply':
      answer = x * y;
      break;
    case 'divide':
      answer = x / y;
      break;
    default:
      console.log('error');
      answer = 'operator error';
  }
  return answer;
};
module.exports = calculateMe;
