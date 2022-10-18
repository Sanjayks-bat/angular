var KpmgEmp = /** @class */ (function () {
    function KpmgEmp() {
    }
    KpmgEmp.prototype.WorkHoursClause = function () {
        console.log("".concat(this.EmpName, " should work for 5 days a week"));
    };
    KpmgEmp.prototype.CheckInTimeClause = function () {
        console.log("".concat(this.EmpName, " should checkin to the office by ").concat(this.ShiftStartTime));
    };
    return KpmgEmp;
}());
var Aman = new KpmgEmp();
Aman.Empid = 10;
Aman.EmpName = "Aman";
Aman.Deesignation = "Analyst";
Aman.ShiftStartTime = "9am";
Aman.WorkHoursClause();
Aman.CheckInTimeClause();
