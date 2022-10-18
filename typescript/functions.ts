function f1(p1:boolean=true){
    console.log("Value of p1: "+p1);
}
f1();
f1(false);

function f2(p1?:string){
    console.log(p1);
}
f2();
f2("Hello");

//Rest parameters
function f3(...p1:number[]){
    for(var i=0;i<p1.length;i++){
        console.log(p1[i]);
    }
}
console.log("Rest Parameters");
f3(100);
f3(200);
f3(600);
f3(10,1);

var f4 = function(){
    console.log("New way to write function using variable syntax");
}

//Arrow Functions/Lambda function

var f5 = () => console.log("A lambda function");
var add = (x:number,y:number) =>x+y;
f5();
console.log(add(10,5));