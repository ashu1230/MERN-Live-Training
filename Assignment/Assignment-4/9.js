// 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]

function Intersetion (a,b) {
    var setA = new Set(a);
    console.log(setA);
    return b.filter(value => setA.has(value));
}

    console.log(Intersetion([2,4,1,7,4,2], [5,1,4,7,3,1]));

{2, 4, 1, 7}
[1, 4, 7, 1]
