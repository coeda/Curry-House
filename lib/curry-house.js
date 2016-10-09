var curry = require('./curry');

function calculate (n1) {
  return function (op) {
    return function (n2) {
      switch(op) {
        case '+':
        case 'add':
          return n1 + n2;
        break;
        case '-':
        case 'subtract':
          return n1 - n2;
        break;
        case '*':
        case 'multiply':
          return n1 * n2;
        break;
        case '/':
        case 'divide':
          return n1 / n2;
        break;
        case '%':
        case 'modulo':
          return n1 % n2;
        break;
        case '^':
        case 'power of':
          let newNumber = n1;
          for( let i=1; i < n2; i++){
            newNumber = newNumber * n1;
          }
          return newNumber ;
        break;

      }
    };
  };
}

function random (start) {
  return {
    to: function(finish){
      let randomNumber = Math.floor(Math.random() * (finish - start)) + start;
        return randomNumber;
        },
    toInclude: function (finish){
            let randomNumber = Math.floor(Math.random() * (finish - start)) + start + 1;
        return randomNumber;
        },
    };
}

function concat(head, name){
  return head + ' ' + name;
}

var prependGreeting = curry(concat, 'Hello');

function add (op1, op2) {
    return op1 + op2;
}

var add4and5 = curry(add5, 4);

function calculator(){

}

var add5 = curry(add, 5);
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};