function f1(p1) {
    if (p1 === void 0) { p1 = true; }
    console.log("Value of p1: " + p1);
}
f1();
f1(false);
function f2(p1) {
    console.log(p1);
}
f2();
f2("Hello");
//Rest parameters
function f3() {
    var p1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p1[_i] = arguments[_i];
    }
    for (var i = 0; i < p1.length; i++) {
        console.log(p1[i]);
    }
}
console.log("Rest Parameters");
f3(100);
f3(200);
f3(600);
f3(10, 1);
var f4 = function () {
    console.log("New way to write function using variable syntax");
};
//Arrow Functions/Lambda function
var f5 = function () { return console.log("A lambda function"); };
var add = function (x, y) { return x + y; };
f5();
console.log(add(10, 5));
