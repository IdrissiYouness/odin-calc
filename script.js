function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    if (num2 === 0) {
      console.log('Dividing By 0 Not Allowed!');
      return undefined;
    } else {
      return num1 / num2;
    }
  }

  function operate(num1, operator, num2) {
     var result;

    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        console.log('Invalid Operator!');
        return;
    }

    console.log(result);
  }


