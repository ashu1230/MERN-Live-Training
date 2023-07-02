// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = maxno. : 15
// 			minno. : -1


function findMaxMin(arr) {
  var max = arr[0];
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

var arr = [10, 3, 15, -1, 9, 6];
var [max, min] = findMaxMin(arr);
console.log("maxno. :", max);
console.log("minno. :", min);
VM2216:16 maxno. : 15
VM2216:17 minno. : -1
