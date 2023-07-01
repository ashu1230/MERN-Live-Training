// 4. Create a function Employee, having id, name, basic_Salary as arguments.

// Compute HRA, DA, TA, GS, NS.

// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.

// GS = Basic Salary + HRA + DA + TA;

// TAX DEDUCTION is 10% of GS.

// NS = GS - TAX DEDUCTION.

// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.
undefined
function golbal (a){
        function perent (b){
            function local (c){}
        }
    }
undefined
function golbal (a){
        function perent (b){
            function local (c){
                return a+b+c;
            }
            return local();
        }
    return perent();
    }
undefined
golbal(10);
NaN
golbal(10)(10)(10);
VM220:1 Uncaught TypeError: golbal(...) is not a function
    at <anonymous>:1:11
(anonymous) @ VM220:1
function global (a){
        function perent (b){
            function local (c){
                return a+b+c;
            }
            return local();
        }
    return perent();
    }
undefined
global(10);
NaN
global();
NaN
local();
VM313:1 Uncaught ReferenceError: local is not defined
    at <anonymous>:1:1
(anonymous) @ VM313:1
local(c);
VM320:1 Uncaught ReferenceError: local is not defined
    at <anonymous>:1:1
(anonymous) @ VM320:1
global(100)(10)(29);
VM355:1 Uncaught TypeError: global(...) is not a function
    at <anonymous>:1:12
(anonymous) @ VM355:1
 var t= (function () {
     var c =0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 })
undefined
 var t= (function () {
     var c =0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 });
undefined
t()
ƒ mycount() {
         c++;
         return c;
     }
t();
ƒ mycount() {
         c++;
         return c;
     }
 var t= (function () {
     var c = 0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 });
undefined
t();
ƒ mycount() {
         c++;
         return c;
     }
 var t= function () {
     var c = 0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 };
undefined
t();
ƒ mycount() {
         c++;
         return c;
     }
 var t= (function () {
     var c = 0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 });
undefined
t();
ƒ mycount() {
         c++;
         return c;
     }
t;
ƒ () {
     var c = 0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 }
t();
ƒ mycount() {
         c++;
         return c;
     }
 var t= (function () {
     var c = 0;
     function mycount() {
         c++;
         return c;
     }
     return mycount;
 })();
undefined
t();
1
t();
2
t();
3
t();
4
function global (a){
        function perent (b){
            function local (c){
                return a+b+c;
            }
            return local();
        }
    return perent();
    }();
VM675:9 Uncaught SyntaxError: Unexpected token ')'
function global (a){
        function perent (b){
            function local (c){
                return a+b+c;
            }
            return local();
        }
    return perent();
    };
undefined
function Calc() {
    var add = function (x,y) {
        return x+y;
    }
    var sub = function (x,y) {
        return x-y;
    }
    return add, sub;
}
undefined
Calc();
ƒ (x,y) {
        return x-y;
    }
function Calc() {
    var add = function (x,y) {
        return x+y;
    }
    var sub = function (x,y) {
        return x-y;
    }
    return [add, sub];
}
undefined
Calc();
(2) [ƒ, ƒ]0: ƒ (x,y)arguments: nullcaller: nulllength: 2name: "add"prototype: {constructor: ƒ}[[FunctionLocation]]: VM854:2[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]1: ƒ (x,y)length: 2[[Prototype]]: Array(0)
function Calc() {
    var add = function adder(x,y) {
        return x+y;
    }
    var sub = function substrct(x,y) {
        return x-y;
    }
    return [add, sub];
}
undefined
Calc();
(2) [ƒ, ƒ]0: ƒ adder(x,y)1: ƒ substrct(x,y)length: 2[[Prototype]]: Array(0)
function Calc() {
    var add = function adder(x,y) {
        return x+y;
    }
    var sub = function substrct(x,y) {
        return x-y;
    }
    return {add, sub};
}
undefined
Calc().add(30,19);
49
Calc().sub(30,19);
11
function (x,y) {
    return x+y;
}
VM1023:1 Uncaught SyntaxError: Function statements require a function name
function arrow(x,y) {
    return x+y;
}
undefined
var arrow2 = (x,y) => x,y;
undefined
var arrow2 = (x,y) => {
    console.log(x+y);
    return x,y;
}
undefined
arr.find(ele) => ele == 30);
VM1355:1 Uncaught SyntaxError: Malformed arrow function parameter list
arr.find(ele => ele == 30);
VM1359:1 Uncaught ReferenceError: arr is not defined
    at <anonymous>:1:1
(anonymous) @ VM1359:1
var arr = [01,20,30,40,50,60,70]; 
undefined
arr.find(ele => ele == 30);
30
arr.find(ele => ele == 01);
1
arr.find(ele => ele == 40);
40
// check wether element is belong i array or not
undefined
arr.find(ele => ele == 10000) ? "Found" : "Not Found";
'Not Found'
arr.find(ele => ele == 01) ? "Found" : "Not Found";
'Found'
arr.filter(e => e == 10);
           
[]length: 0[[Prototype]]: Array(0)
arr.filter(e => e == 40);
           
[40]
  var x = [10,30,39,40];
undefined
console.log("x is :" +x);
VM1982:1 x is :10,30,39,40
undefined
console.log("x is :" ,x);
VM1993:1 x is : (4) [10, 30, 39, 40]0: 101: 302: 393: 40length: 4[[Prototype]]: Array(0)
undefined
arr.filter(e => e == 10).length;
           
0
arr.filter(e => e == 59).length;
           
0
arr.filter(e => e == 50).length;
           
1
var h = arr.filter(e => true);
undefined
h();
VM2128:1 Uncaught TypeError: h is not a function
    at <anonymous>:1:1
(anonymous) @ VM2128:1
h
(7) [1, 20, 30, 40, 50, 60, 70]0: 11: 202: 303: 404: 505: 606: 70length: 7[[Prototype]]: Array(0)
arr == h;
false
// Array Cloaning is done
undefined
// By using filter
undefined
arr = arr.filter(e => e! = 10);
VM2322:1 Uncaught SyntaxError: missing ) after argument list
arr = arr.filter(e => e! = 1);
VM2328:1 Uncaught SyntaxError: missing ) after argument list
arr = arr.filter(e => e! = 1)
VM2334:1 Uncaught SyntaxError: missing ) after argument list
arr = arr.filter(e => e! = 06)
VM2346:1 Uncaught SyntaxError: missing ) after argument list
arr = arr.filter(e => e! = 60)
VM2359:1 Uncaught SyntaxError: missing ) after argument list
arr = arr.filter(e => (e! = 60 && e! = 30))
VM2382:1 Uncaught SyntaxError: Unexpected token '!'
arr = arr.filter(e => (e! = 60 && e! = 30));
VM2388:1 Uncaught SyntaxError: Unexpected token '!'
arr = arr.filter(e => (e!= 60&&e != 30));
(5) [1, 20, 40, 50, 70]
arr = arr.filter(e => (e!=60 && e!=30));
(5) [1, 20, 40, 50, 70]
  var price = [30,49,48,23.545,11.5454];
undefined
t
ƒ mycount() {
         c++;
         return c;
     }
t = 100000.4343;
100000.4343
t.toLocaleString('hi');
'1,00,000.434'
t.toLocaleString('us');
'100,000.434'
t.toLocaleString('fr');
'100 000,434'
t.toLocaleString('');
VM2661:1 Uncaught RangeError: Incorrect locale information provided
    at Number.toLocaleString (<anonymous>)
    at <anonymous>:1:3
(anonymous) @ VM2661:1
price.map(p => p.toLocaleString('hi'));
(5) ['30', '49', '48', '23.545', '11.545']
price();
VM2841:1 Uncaught TypeError: price is not a function
    at <anonymous>:1:1
(anonymous) @ VM2841:1
price;
(5) [30, 49, 48, 23.545, 11.5454]
var a = price.map(p=>p);
undefined
a == price
false
arr = [340,34,45,65,60,78,98,45,32];
(9) [340, 34, 45, 65, 60, 78, 98, 45, 32]
arr.sort((first, second) => first-second);
(9) [32, 34, 45, 45, 60, 65, 78, 98, 340]
arr.sort((first, second) => second-first);
(9) [340, 98, 78, 65, 60, 45, 45, 34, 32]
arr.sort((first, second) => second-first+1);
(9) [340, 98, 78, 65, 60, 45, 45, 34, 32]
var name = ["Ashu", "shya", "amit", "sohan"];
undefined
"Ashu".toLocaleCompare("Ashu");
VM3466:1 Uncaught TypeError: "Ashu".toLocaleCompare is not a function
    at <anonymous>:1:8
(anonymous) @ VM3466:1
"Ashu".localeCompare("Ashu");
0
"Ashu".localeCompare("sohan");
-1
"amit".localeCompare("sohan");
-1
"amit".localeCompare("Ashu");
-1
"amit".localeCompare("amit");
0
"amit".localeCompare("shya");
-1
"Ashu".localeCompare("shya");
-1
name.sort((a,b) => a.localeCompare(b));
VM3802:1 Uncaught TypeError: name.sort is not a function
    at <anonymous>:1:6
(anonymous) @ VM3802:1
arr = [340,34,45,65,60,78,98,45,32];
(9) [340, 34, 45, 65, 60, 78, 98, 45, 32]
arr.reduce((acc, e) => acc +e,0);
797
arr.reduce((acc, e) => acc +e,0);   //Same as filter .
797
arr.reduce((acc, e) =>{
}); 
undefined
arr.reduce((acc, e) =>{
    if (e=10) {
        acc.push(e);
    }
    return acc();
},[]); 
VM4160:5 Uncaught TypeError: acc is not a function
    at <anonymous>:5:12
    at Array.reduce (<anonymous>)
    at <anonymous>:1:5
(anonymous) @ VM4160:5
(anonymous) @ VM4160:1
arr.reduce((acc, e) =>{
    if (e=60) {
        acc.push(e);
    }
    return acc();
},[]); 
VM4166:5 Uncaught TypeError: acc is not a function
    at <anonymous>:5:12
    at Array.reduce (<anonymous>)
    at <anonymous>:1:5
(anonymous) @ VM4166:5
(anonymous) @ VM4166:1
