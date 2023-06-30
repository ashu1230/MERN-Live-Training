

// 1.Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38

function date(){
    var List = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dateobj = new Date();
    var getcurrentDay = dateobj.getDay();
    var getcurrentHour = dateobj.getHours();
    var getcurrentsecond = dateobj.getSeconds();
    var getcurrentMinutes = dateobj.getMinutes();

    var DayOrNight = getcurrentHour >= 12 ? "PM" : "AM";

    var Output = `Today Is : ${List[getcurrentDay]}
    Current Time Is :${getcurrentHour} ${DayOrNight} : ${getcurrentMinutes} : ${getcurrentsecond}`;

    console.log(Output);
}

date();

Today Is : Friday
Current Time Is :22 PM : 41 : 25
