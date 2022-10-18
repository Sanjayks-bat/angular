interface IEmpContract{
    WorkHoursClause();
    CheckInTimeClause();
}

class KpmgEmp implements IEmpContract{
    public Empid:number;
    public EmpName:string;
    public Deesignation:string;
    public ShiftStartTime:string;
    WorkHoursClause() {
        console.log(`${this.EmpName} should work for 5 days a week`);
    }
    CheckInTimeClause() {
        console.log(`${this.EmpName} should checkin to the office by ${this.ShiftStartTime}`);
    }


}

var Aman = new KpmgEmp();
Aman.Empid = 10;
Aman.EmpName = "Aman";
Aman.Deesignation = "Analyst";
Aman.ShiftStartTime = "9am";
Aman.WorkHoursClause();
Aman.CheckInTimeClause();