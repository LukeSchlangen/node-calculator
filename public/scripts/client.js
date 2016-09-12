console.log('sourced');
var $ = require('jquery');

$(function(){
  $('#calculate').on('click', function(){
    console.log('calulator clicked');
    var x = $('#val1').val();
    var y = $('#val2').val();

    var operator = $('#operator').val();

    var toSend = {
      x: x,
      y: y,
      type: operator
    };

    console.log('toSend', toSend);

    $.ajax({
      type: 'POST',
      url: '/',
      data: toSend,
      sucess: function(result){
        console.log('success, result = ', result);
        display(result);
      },
      error: function(){
        console.log('error connecting to server');
        display(result);
      }
    });
  });

  function display(resultObject){
    console.log('in display', resultObject);
    $('outputDiv').text("Answer = " + resultObject.answer);
  }
});
