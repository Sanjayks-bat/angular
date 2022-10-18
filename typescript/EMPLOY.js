var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employ = /** @class */ (function () {
    function Employ() {
    }
    Employ.prototype.works = function () {
        var work = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            work[_i] = arguments[_i];
        }
        for (var i = 0; i < work.length; i++) {
            console.log(work[i]);
        }
    };
    Employ.prototype.TakesOff = function (days, name) {
        console.log(name + " Takes off " + days + " days");
    };
    return Employ;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.AssignWork = function (n) {
        if (n < 5) {
            this.works("Audit", "Advisory");
        }
        else {
            this.works("Security");
        }
    };
    Admin.prototype.Increment = function (n) {
        if (n < 5) {
            console.log("Increment: INR " + 100000);
        }
        else {
            console.log("Increment: INR " + 200000);
        }
    };
    return Admin;
}(Employ));
var Emp1 = new Employ();
Emp1.Empid = 10;
Emp1.Name = "John";
Emp1.Designatin = "Analyst";
Emp1.Email = "john@gmail.com";
var Emp2 = new Employ();
Emp2.Empid = 1;
Emp2.Name = "Snow";
Emp2.Designatin = "Analyst";
Emp2.Email = "jsnow@gmail.com";
var ad1 = new Admin();
console.log(Emp1.Name + " is working on the following: ");
ad1.AssignWork(Emp1.Empid);
ad1.Increment(Emp1.Empid);
ad1.TakesOff(10, Emp1.Name);
var ad2 = new Admin();
console.log(Emp2.Name + " is working on the following: ");
ad2.AssignWork(Emp2.Empid);
ad2.Increment(Emp2.Empid);
ad2.TakesOff(20, Emp2.Name);
