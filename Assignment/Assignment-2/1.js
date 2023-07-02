// Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1

function EvenOdd(num) {
  var numString = num.toString();
  var evenSum = 0;
  var oddSum = 0;
  for (var i = 0; i < numString.length; i++) {
    var digit = parseInt(numString[i]);
    if ((i + 1) % 2 === 0) {
      evenSum += digit; 
    } else {
      oddSum += digit; 
    }
  }
  console.log("Even Sum:", evenSum);
  console.log("Odd Sum:", oddSum);
}


EvenOdd(2914);
Even Sum: 13
Odd Sum: 3
