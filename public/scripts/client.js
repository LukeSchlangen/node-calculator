console.log('sourced');

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
  })
});
