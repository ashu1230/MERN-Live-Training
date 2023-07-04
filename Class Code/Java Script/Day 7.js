Error with Permissions-Policy header: Unrecognized feature: 'ch-ua-form-factor'.
DevTools failed to load source map: Could not load content for https://ogs.google.com/_/mss/boq-one-google/_/ss/k=boq-one-google.OneGoogleWidgetUi.qaL3inYXt4U.L.B1.O/am=AM3d/d=1/ed=1/rs=AM-SdHszHycQzG6eAKbbHqWXUepZbHyvXw/chrome.css.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE
var obj = {}
undefined
var obj = {
    arr:[1,2,3,4,5,6],
    even:[],
    odd:[],
    // EvenOdd : function(){}
    evenOdd() { //ES 6 Object Short Hand.
        this.arr.forEach(function (a) {
            if (a%2 == 0){
                this.even.push(a);
            }else {
                this.odd.push(a);
            }
        })
    }
}
undefined
obj;
{arr: Array(6), even: Array(0), odd: Array(0), evenOdd: ƒ}arr: (6) [1, 2, 3, 4, 5, 6]0: 11: 22: 33: 44: 55: 6length: 6[[Prototype]]: Array(0)even: []evenOdd: ƒ evenOdd()odd: [][[Prototype]]: Object
var obj = {
    arr:[1,2,3,4,5,6],
    even:[],
    odd:[],
    // EvenOdd : function(){}
    evenOdd() { //ES 6 Object Short Hand.
        this.arr.forEach(function (a) {
            if (a%2 == 0){
                this.even.push(a);
            }else {
                this.odd.push(a);
            }
        })
    }
}
undefined
var obj = {
    arr:[1,2,3,4,5,6],
    even:[],
    odd:[],
    // EvenOdd : function(){}
    evenOdd() { //ES 6 Object Short Hand.
        const that = this;
        this.arr.forEach(function (a) {
            if (a%2 == 0){
                this.even.push(a);
            }else {
                this.odd.push(a);
            }
        })
    }
}
undefined
obj;
{arr: Array(6), even: Array(0), odd: Array(0), evenOdd: ƒ}
var obj = {
    arr:[1,2,3,4,5,6],
    even:[],
    odd:[],
    // EvenOdd : function(){}
    evenOdd() { //ES 6 Object Short Hand.
        const that = this;
        this.arr.forEach(function (a) {
            if (a%2 == 0){
                that.even.push(a);
            }else {
                that.odd.push(a);
            }
        })
    }
}
undefined
obj;
{arr: Array(6), even: Array(0), odd: Array(0), evenOdd: ƒ}
objevenOdd();
VM643:1 Uncaught ReferenceError: objevenOdd is not defined
    at <anonymous>:1:1
(anonymous) @ VM643:1
obj evenOdd();
VM648:1 Uncaught SyntaxError: Unexpected identifier 'evenOdd'
obj.evenOdd();
undefined
obj;
{arr: Array(6), even: Array(3), odd: Array(3), evenOdd: ƒ}arr: (6) [1, 2, 3, 4, 5, 6]even: (3) [2, 4, 6]evenOdd: ƒ evenOdd()odd: (3) [1, 3, 5][[Prototype]]: Object
var obj = {
    arr:[1,2,3,4,5,6],
    even:[],
    odd:[],
    // EvenOdd : function(){}
    evenOdd() { //ES 6 Object Short Hand.
        
        this.arr.forEach((a) => {
            if (a%2 == 0){
                that.even.push(a);
            }else {
                that.odd.push(a);
            }
        })
    }
}
undefined
obj.even.length=0;
0
obj.odd.length=0;
0
obj.evenOdd();
VM687:12 Uncaught ReferenceError: that is not defined
    at <anonymous>:12:17
    at Array.forEach (<anonymous>)
    at Object.evenOdd (<anonymous>:8:18)
    at <anonymous>:1:5
(anonymous) @ VM687:12
evenOdd @ VM687:8
(anonymous) @ VM735:1
