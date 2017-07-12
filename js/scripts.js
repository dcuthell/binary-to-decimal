//Backend

function binToDec(userInput){
  var result = userInput;
  return result;
}

//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    var input = $("input#binNum").val();
    var output = binToDec(input);
    $("#decNum").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
