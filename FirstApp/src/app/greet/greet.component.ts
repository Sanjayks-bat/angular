import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  public pageName:string = "WELCOME pAGE";
  public GreetMsg:string = "Welcome to our exotic angular app";

  constructor() { }

  ngOnInit(): void {
  }

}
