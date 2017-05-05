var countUp = function(countTo){
var result = [];
for(var i = 1; i <= countTo; i++){
    var index = result.indexOf(i);
    if(i % 3=== 0) {
      result.splice(index, 0);
      result.push('ping');
    }else if(i % 5 === 0) {
      result.splice(index, 0);
      result.push('pong');
    }else if(i % 15 === 0) {
      result.splice(index, 0);
      result.push('Ping pong');
    }else{
      result.push(i);
    }
} return result;
};//User Interface Logic

$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var number1=String(parseInt($("input#num1").val()));
    var result=countUp(number1);
    $("#output").text(result);
  });
});
