
class Person{
    public Name:string;
    public Age:number;
    public Email:string;
    private Secrets:string[];
    protected Income:number;

    public Eat(...food:string[]){
        console.log(this.Name + " likes to eat the following: ");
        for(var i=0;i<food.length;i++){
            console.log(food[i]);
        }
    }
    public AssignIncome(income:number){
        this.Income = income;
    }
}

class IToff extends Person{
    public PrintTotalRefund(income){
        console.log(this.Name+ " has recieved total refund of");
        if(this.Income>300000){
            console.log("INR 15000");
        }
        else{
            console.log("INR 3000");
        }
    }
} 


var SE = new Person();
SE.Name = "Tina";
SE.AssignIncome(500000);

var auditor = new IToff();
auditor.Name = 'Jake';
auditor.Eat("Chicken","Rice");
auditor.AssignIncome(1000000);
auditor.PrintTotalRefund(SE);


var John = new Person();
John.Name = "John";
John.Age = 20;
John.Email = "jjhn@gmail.com";
John.Eat("Dosa","idli");



var jlo = new Person();
jlo.Name = "jlo";
jlo.Age = 20;
jlo.Email = "jlon@gmail.com";
jlo.Eat("Chapati","parota");
