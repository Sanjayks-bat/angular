var n1:number = 100;
var n2:number = 200;
console.log(n1+n2);

var names:string = "BATMAN";
var obj:any = {
    k1:100,
    k2:"CAT",
    k3:[10,28,90]
};
var arrNames:string[] = ["Bta","cat","flash"];
function greet(pName:string) : void{
    console.log("Namaste "+ pName);
}
greet(names);
console.log(names);
console.log(obj);
