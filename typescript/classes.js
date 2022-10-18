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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Eat = function () {
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i] = arguments[_i];
        }
        console.log(this.Name + " likes to eat the following: ");
        for (var i = 0; i < food.length; i++) {
            console.log(food[i]);
        }
    };
    Person.prototype.AssignIncome = function (income) {
        this.Income = income;
    };
    return Person;
}());
var IToff = /** @class */ (function (_super) {
    __extends(IToff, _super);
    function IToff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IToff.prototype.PrintTotalRefund = function (income) {
        console.log(this.Name + " has recieved total refund of");
        if (this.Income > 300000) {
            console.log("INR 15000");
        }
        else {
            console.log("INR 3000");
        }
    };
    return IToff;
}(Person));
var SE = new Person();
SE.Name = "Tina";
SE.AssignIncome(500000);
var auditor = new IToff();
auditor.Name = 'Jake';
auditor.Eat("Chicken", "Rice");
auditor.AssignIncome(1000000);
auditor.PrintTotalRefund(SE);
var John = new Person();
John.Name = "John";
John.Age = 20;
John.Email = "jjhn@gmail.com";
John.Eat("Dosa", "idli");
var jlo = new Person();
jlo.Name = "jlo";
jlo.Age = 20;
jlo.Email = "jlon@gmail.com";
jlo.Eat("Chapati", "parota");
