

let clearBtn = document.querySelector('.btn.clear');

let delBtn = document.querySelector('.btn.del');

let equBtn = document.querySelector('.btn.equals');


let dot = document.querySelector('.btn.dot');


let  digits = document.querySelectorAll('.btn.digit');
let  operators = document.querySelectorAll('.btn.operation');


let previousOutput = document.querySelector('.previous-operation');
let currentOutput = document.querySelector('.current-operation');


let operator = '';
let prevValue = '';
let currValue = '';


digits.forEach((digit)=> digit.addEventListener('click',(d)=>{

     currValue += d.target.textContent;
     currentOutput.textContent = currValue;

}));


operators.forEach((op)=> op.addEventListener('click',(o)=>{

    if (prevValue!='' && currValue!=''){
      operate(prevValue,operator,currValue);
    }
    operator = o.target.textContent;
    prevValue = currValue;
    currValue = '';

    previousOutput.textContent = prevValue + " " + operator;
    currentOutput.textContent = currValue;

}));


clearBtn.addEventListener('click',()=>{

  prevValue = '';
  currValue = '';
  operator = '';

  previousOutput.textContent = currValue;
  currentOutput.textContent = currValue;


});


delBtn.addEventListener('click',()=>{
   currValue = currValue.slice(0,-1);
   currentOutput.textContent = currValue;
});


equBtn.addEventListener('click',()=>{
    operate(prevValue,operator,currValue);
    previousOutput.textContent = '';
});



dot.addEventListener('click',()=>{
    if(!currValue.includes('.')){
        currValue+= '.';
    }
    currentOutput.textContent = currValue;
});




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

function modulo(num1,num2){
  return num1 % num2;
}

function operate(preValue, op, curValue) {

    preValue = Number(preValue);
    curValue = Number(curValue);

    var result;

    switch (op) {
      case '+':
        result = add(preValue, curValue);
        break;
      case '-':
        result = subtract(preValue, curValue);
        break;
      case '*':
        result = multiply(preValue, curValue);
        break;
      case '/':
        result = divide(preValue, curValue);
        break;
      case '%':
        result = modulo(preValue,curValue);
        break;
      default:
        console.log('Invalid Operator!');
        return;
    }
    currValue = result;
    currentOutput.textContent = result;
    prevValue = '';

}


