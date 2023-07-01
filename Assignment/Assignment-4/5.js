// 5.Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- var arr = ['a','b','c','d','e','f']
			
// 		output = ['f','e','d','c','b','a']

var arr = ['a','b','c','d','e','f']
undefined

var result = arr.reduceRight((acc, CV) => acc.concat(CV));
undefined

result.split("");
(6) ['f', 'e', 'd', 'c', 'b', 'a']

