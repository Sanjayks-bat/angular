class Employ{
    public Empid:number;
    public Name:string;
    public Designatin:string;
    public Email:string;
    protected Salary:number;

    public works(...work:string[]){
        for(var i=0;i<work.length;i++){
            console.log(work[i]);
        }
    }
    public TakesOff(days:number,name:string){
        console.log(name+" Takes off "+days +" days");
    }
}

class Admin extends Employ{
    public AssignWork(n:number){
        if(n<5){
            this.works("Audit","Advisory");
        }
        else{
            this.works("Security");
        }
        
    }
    public Increment(n:number){
        if(n<5){
            console.log("Increment: INR "+ 100000);
        }
        else{
            console.log("Increment: INR "+ 200000);
        }
    }

}

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
ad1.TakesOff(10,Emp1.Name);

var ad2 = new Admin();
console.log(Emp2.Name + " is working on the following: ");
ad2.AssignWork(Emp2.Empid);
ad2.Increment(Emp2.Empid);
ad2.TakesOff(20,Emp2.Name);