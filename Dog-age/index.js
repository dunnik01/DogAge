

$("button").click(function(){
logic();
});

$(".input").keydown(function(event ) {
  if ( event.which == 13 ) {
    logic();
  }
});
function logic(){

  var dogAge= $(".input").val();
  if(!$.isNumeric(dogAge)){
    alert("Please enter a numeric value");
  }
  if(dogAge>28){
    alert("Waaw!!! Your dog is the oldest dog ever alive. Please apply for guinness record!!!");
  }else if(dogAge<0){
    alert("Please enter a valid number");
  }
  var humanAge = (dogAge-2)*4 + 21;
  $(".human-age").text(" Your dog's age is equivalent to "+humanAge + " human years");
}
