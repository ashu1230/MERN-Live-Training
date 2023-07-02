// Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1



function countCharacters(str) {
  var charCount = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase(); 
    if (/[a-z]/i.test(char)) {
      if (charCount[char]) {
        charCount[char]++; 
      } else {
        charCount[char] = 1; 
      }
    }
  }
  for (var char in charCount) {
    console.log(char, charCount[char]);
  }
}
var input = "Ashutosh Maurya";
countCharacters(input);
VM1215:14 a 3
VM1215:14 s 2
VM1215:14 h 2
VM1215:14 u 2
VM1215:14 t 1
VM1215:14 o 1
VM1215:14 m 1
VM1215:14 r 1
VM1215:14 y 1
