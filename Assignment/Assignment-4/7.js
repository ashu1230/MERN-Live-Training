// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12

var arr = [12,4,6,9,2,15,3,9];
undefined

arr.sort(function (a,b) {
    return b-a;
});

[15, 12, 9, 9, 6, 4, 3, 2]

console.log(arr[1]);

12
