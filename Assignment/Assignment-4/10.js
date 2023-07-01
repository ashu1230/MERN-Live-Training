// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]


arr = [1,2,5,2,5,1,6,7,7]
(9) [1, 2, 5, 2, 5, 1, 6, 7, 7]

arr = arr.filter (function (value, index, array){
                return array.indexOf(value) === index;
});


(5) [1, 2, 5, 6, 7]
