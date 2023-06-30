// 2.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors



function capital(input) {
    var w = input.split(' ');
    var capW = [];
    w.forEach(element => {
       capW.push(element[0].toUpperCase() + element.slice(1, element.length)); 
    });
    return capW.join(' ');
}



capital('learn javascript from brain mentors');
'Learn Javascript From Brain Mentors'
