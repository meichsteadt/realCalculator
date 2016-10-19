$(function() {

  //Variables
  var firstNumber = true;
  var number1 = "";
  var number2 = "";
  var option = "";
  var answer = "";

  //Business Logic
  $("#one").click(function() {
    if(firstNumber) {
      number1+='1';
    }
    else {
      number2+='1';
    }
  });

  $("#two").click(function() {
    if(firstNumber) {
      number1+='2';
    }
    else {
      number2+='2';
    }
  });

  $("#three").click(function() {
    if(firstNumber) {
      number1+='3';
    }
    else {
      number2+='3';
    }
  });

  $("#four").click(function() {
    if(firstNumber) {
      number1+='4';
    }
    else {
      number2+='4';
    }
  });

  $("#five").click(function() {
    if(firstNumber) {
      number1+='5';
    }
    else {
      number2+='5';
    }
  });

  $("#six").click(function() {
    if(firstNumber) {
      number1+='6';
    }
    else {
      number2+='6';
    }
  });

  $("#seven").click(function() {
    if(firstNumber) {
      number1+='7';
    }
    else {
      number2+='7';
    }
  });

  $("#eight").click(function() {
    if(firstNumber) {
      number1+='8';
    }
    else {
      number2+='8';
    }
  });

  $("#nine").click(function() {
    if(firstNumber) {
      number1+='9';
    }
    else {
      number2+='9';
    }
  });

  $("#zero").click(function() {
    if(firstNumber) {
      number1+='0';
    }
    else {
      number2+='0';
    }
  });

  $("#plus").click(function() {
    if (!firstNumber) {
      doMath();
      number1 = answer;
      number2 = "";
    }
    firstNumber = false;
    option = "plus";
  });

  $("#minus").click(function() {
    if (!firstNumber) {
      doMath();
      number1 = answer;
      number2 = "";
    }
    firstNumber = false;
    option = "minus";
  });

  $("#mult").click(function() {
    if (!firstNumber) {
      doMath();
      number1 = answer;
      number2 = "";
    }
    firstNumber = false;
    option = "multiply";
  });

  $("#divide").click(function() {
    if (!firstNumber) {
      doMath();
      number1 = answer;
      number2 = "";
    }
    firstNumber = false;
    option = "divide";
  });

  $("#clear").click(function() {
    clear();
    firstNumber = true;
  });


  $("#dot").click(function() {
    if(firstNumber) {
      number1+='.';
    }
    else {
      number2+='.';
    }
  });

  $('#enter').click(function() {
    doMath();
    clear();
  });

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

  function clear() {
    number1 = "";
    number2 = "";
    option = "";
  }

  function doMath() {
    if (option === "plus") {
      answer = Math.round(add(number1,number2) *10000) / 10000;
    }
    else if (option === "minus") {
      answer = Math.round(subtract(number1,number2) *10000) / 10000;
    }
    else if (option === "multiply") {
      answer = Math.round(multiply(number1,number2) *10000) / 10000;
    }
    else if (option === "divide"){
      answer = Math.round(divide(number1,number2) *10000) / 10000;
    }
  }

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
