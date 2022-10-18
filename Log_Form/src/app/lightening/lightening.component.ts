import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightening',
  templateUrl: './lightening.component.html',
  styleUrls: ['./lightening.component.css']
})
export class LighteningComponent implements OnInit {
  public innerText:string="Click me";

  public alert(ctrl:any){

    ctrl.style="color:orange; background-color:grey";
    ctrl.innerText="Don't disturb!";
    console.log(ctrl);
  }

  public changeColor(ctrl:any){
    ctrl.style="background-color:pink";

  }

  public switchOff(ctrl:any){
    ctrl.styke="background-color:green";

  }

  constructor() { }

  ngOnInit(): void {
  }

}
