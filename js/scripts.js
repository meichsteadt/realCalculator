$(function() {
  //Variables
  var firstNumber = true; //determines whether the number typed is the first number or not
  var hasAnswer = false; //determines if there is currently an answer stored
  var enter = false; //determines if the enter key has been hit and new number typed should append or not
  var number1 = "";//sets first number for calculation
  var number2 = "";//sets second number for calculation
  var answer = "";//sets the answer
  var option = "";//set the operator option (plus, minus, multiply, divide)

  //================================================== Business Logic ======================================================================

  //for each number goes through and checks if there is already an answer. If so overwrite number1 and set answer to blank. Else, concat the current number
  function writeNumber(number) {
    if(hasAnswer) {
      if(firstNumber) {
        number1 = number;
      }
      else {
        number2 = number;
      }
      hasAnswer = false;
    }
    else {
      if(firstNumber) {
        number1+=number;
      }
      else {
        number2+=number;
      }
    }
  }

  $("#one").click(function() {
    var currentNumber = '1';
    writeNumber(currentNumber);

  });

  $("#two").click(function() {
    var currentNumber = '2';
    writeNumber(currentNumber);
  });

  $("#three").click(function() {
    var currentNumber = '3';
    writeNumber(currentNumber);
  });

  $("#four").click(function() {
    var currentNumber = '4';
    writeNumber(currentNumber);
  });

  $("#five").click(function() {
    var currentNumber = '5';
    writeNumber(currentNumber);
  });

  $("#six").click(function() {
    var currentNumber = '6';
    writeNumber(currentNumber);
  });

  $("#seven").click(function() {
    var currentNumber = '7';
    writeNumber(currentNumber);
  });

  $("#eight").click(function() {
    var currentNumber = '8';
    writeNumber(currentNumber);
  });

  $("#nine").click(function() {
    var currentNumber = '9';
    writeNumber(currentNumber);
  });

  $("#zero").click(function() {
    var currentNumber = '0';
    writeNumber(currentNumber);
  });

  //if there is an answer number1 is now equal to that answer, runs it's respective math operation, then sets the answer to
  function operator() {
    if(hasAnswer){
      number1 = answer;
      doMath();
    }
    if (!firstNumber) {
      doMath();
      number1 = answer;
      number2 = "";
    }
    firstNumber = false;
  }

  $("#plus").click(function() {
      operator();
      option = "plus";
    });

    $("#minus").click(function() {
      operator();
      option = "minus";
    });

    $("#mult").click(function() {
      operator();
      option = "multiply";
    });

    $("#divide").click(function() {
      operator();
      option = "divide";
    });

  $("#clear").click(function() {
    clear();
    hasAnswer = false;
    answer = '';
  });


  $("#dot").click(function() {
    currentNumber = '.';
    writeNumber(currentNumber);
  });

  $('#enter').click(function() {
    doMath();
    clear();
    hasAnswer = true;
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

  function clear() {
    number1 = "";
    number2 = "";
    option = "";
    firstNumber = true;
  }

  //================================================== Front end Logic ==================================================================
  function hasOperator() {
    if(option === 'plus' || option === 'minus'
    || option === 'multiply' || option === 'divide') {
      return true;
    }
    else {
      return false;
    }
  }

  $("#one").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
      console.log('ok');
    }
    $("#answer").append("<p>1</p>");
  });

  $("#two").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>2</p>");
  });

  $("#three").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>3</p>");
  });

  $("#four").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>4</p>");
  });

  $("#five").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>5</p>");
  });

  $("#six").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>6</p>");
  });

  $("#seven").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>7</p>");
  });

  $("#eight").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>8</p>");
  });

  $("#nine").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>9</p>");
  });

  $("#zero").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>0</p>");
  });

  $("#dot").click(function() {
    if(enter && !hasOperator() ){
      clearScreen();
    }
    $("#answer").append("<p>.</p>");
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
    clearScreen();
  });

  $('#enter').click(function() {
    $('#answer').children().remove();
    $("#answer").append('<p>'+answer+'</p>');
    enter = true;
  });
  function clearScreen() {
    $('#answer').children().remove();
    enter = false;
  }
});


/*  Button function used for debugging
$('#display').click(function() {
    console.log('1:' + number1, '2:' + number2, 'a:' + answer);
    console.log("fn:" + firstNumber,'ans:' + hasAnswer,'opt:' + hasOperator() + ' ' + option, 'enter:' + enter);
  }); */
