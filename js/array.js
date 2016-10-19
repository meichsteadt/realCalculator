$(function() {

  //Variables
  var counter = 0;
  var number1 = "";
  var number2 = "";
  var option = "";
  var answer = "";

  //Business Logic
  $("#one").click(function() {
    if(counter === 0) {
      number1+='1';
    }
    else {
      number2+='1';
    }
  });

  $("#two").click(function() {
    if(counter === 0) {
      number1+='2';
    }
    else {
      number2+='2';
    }
  });

  $("#three").click(function() {
    if(counter === 0) {
      number1+='3';
    }
    else {
      number2+='3';
    }
  });

  $("#four").click(function() {
    if(counter === 0) {
      number1+='4';
    }
    else {
      number2+='4';
    }
  });

  $("#five").click(function() {
    if(counter === 0) {
      number1+='5';
    }
    else {
      number2+='5';
    }
  });

  $("#six").click(function() {
    if(counter === 0) {
      number1+='6';
    }
    else {
      number2+='6';
    }
  });

  $("#seven").click(function() {
    if(counter === 0) {
      number1+='7';
    }
    else {
      number2+='7';
    }
  });

  $("#eight").click(function() {
    if(counter === 0) {
      number1+='8';
    }
    else {
      number2+='8';
    }
  });

  $("#nine").click(function() {
    if(counter === 0) {
      number1+='9';
    }
    else {
      number2+='9';
    }
  });

  $("#zero").click(function() {
    if(counter === 0) {
      number1+='0';
    }
    else {
      number2+='0';
    }
  });

  $("#plus").click(function() {
    counter++;
    option = "plus";
  });

  $("#minus").click(function() {
    counter++;
    option = "minus";
  });

  $("#mult").click(function() {
    counter++;
    option = "multiply";
  });

  $("#divide").click(function() {
    counter++;
    option = "divide";
  });

  $("#clear").click(function() {
    number1 = "";
    number2 = "";
    counter = 0;
    option = "";
  });


  $("#dot").click(function() {
    if(counter === 0) {
      number1+='.';
    }
    else {
      number2+='.';
    }
  });

  $('#enter').click(function() {
    if (option === "plus") {
      answer = add(number1,number2);
    }
    else if (option === "minus") {
      answer = subtract(number1,number2);
    }
    else if (option === "multiply") {
      answer = multiply(number1,number2);
    }
    else {
      answer = divide(number1,number2);
    }
    number1 = "";
    number2 = "";
    counter = 0;
    option = "";
  });

  /*function add(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++) {
      sum+=arr[i];
    }
    return sum;
  }; */
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
  };

  function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
  };

  function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
  };

  function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
  };

  $("#plus").click(function() {

  });

  //Front End Logic
  $("#one").click(function() {
    $("#answer").append("<p>1</p>");
  });

  $("#two").click(function() {
    $("#answer").append("<p>2</p>");
  });

  $("#three").click(function() {
    $("#answer").append("<p>3</p>");
  });

  $("#four").click(function() {
    $("#answer").append("<p>4</p>");
  });

  $("#five").click(function() {
    $("#answer").append("<p>5</p>");
  });

  $("#six").click(function() {
    $("#answer").append("<p>6</p>");
  });

  $("#seven").click(function() {
    $("#answer").append("<p>7</p>");
  });

  $("#eight").click(function() {
    $("#answer").append("<p>8</p>");
  });

  $("#nine").click(function() {
    $("#answer").append("<p>9</p>");
  });

  $("#plus").click(function() {
    $("#answer").append("<p>+</p>");
  });

  $("#minus").click(function() {
    $("#answer").append("<p>-</p>");
  });

  $("#mult").click(function() {
    $("#answer").append("<p>*</p>");
  });

  $("#divide").click(function() {
    $("#answer").append("<p>/</p>");
  });

  $("#clear").click(function() {
    $("#answer").children().remove();
  });

  $("#zero").click(function() {
    $("#answer").append("<p>0</p>");
  });

  $("#dot").click(function() {
    $("#answer").append("<p>.</p>");
  });

  $('#enter').click(function() {
    $("#answer").children().remove();
    $("#answer").append('<p>'+answer+'</p>');
  });
});
