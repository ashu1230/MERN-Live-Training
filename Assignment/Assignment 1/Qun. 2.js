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
