import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string="";
  public password:string="";
  public uNames:any=[];
  public status:string="";
  public alert:string="";

  public Add(){
    this.uNames.push({name:this.username});
    var lastIndex = this.uNames.length-1;
    var lastItem = this.uNames[lastIndex];
    this.status = `User ${lastItem.name} successfully added `;
  }

  public Alert(){
    this.alert = `Status : User Login Successfull!!`;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
