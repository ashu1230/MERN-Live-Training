// 1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
// 3==multiply, 4==divide ).Don`t use switch statement or if else statements
 
// 1.add,
// 2.subtract,
// 3.multiply,
// 4.divide 

// write the calc function for all the operations



function calculate(num1, num2, ope) {
  var operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
  ];
  var selectedOpe = operations[ope - 1];
  if (selectedOpe) {
    return selectedOpe(num1, num2);
  } else {
        return'Invalid operation!';
  }
}
console.log(calculate(8, 5, 1));
console.log(calculate(8, 2, 2));
console.log(calculate(12, 1, 4));
console.log(calculate(15, 8, 5));
VM1445:15 13
VM1445:16 6
VM1445:17 12
VM1445:18 Invalid operation!
