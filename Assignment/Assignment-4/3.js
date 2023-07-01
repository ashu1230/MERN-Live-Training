// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4


function countVowels(str) {
    return ( str = str.match(/[aeiou]/gi)) ? str.length : 0;
}


console.log("Count: " + countVowels(prompt(str)));

Count: 4
