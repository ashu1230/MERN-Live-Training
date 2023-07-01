// 8.Write a function to rotate an array by a given number of steps to the right.

// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]


var arr = [1,2,3,4,5];

var rotate = (arr, k) => arr.slice(k).concat(arr.slice(0, k));

rotate(arr,3);

(5) [4, 5, 1, 2, 3]
