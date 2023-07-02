// 2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.


function Triangle(a, b, c) {
  var isEquilateral = (a === b && b === c);
  return () => {
    return isEquilateral;
  };
}
var isEquilateralTriangle = Triangle(3, 3, 3)();
console.log(isEquilateralTriangle); 

var isEquilateralTriangl = Triangle(2, 3, 4)();
console.log(isEquilateralTriangl); 
VM1624:8 true
VM1624:11 false
