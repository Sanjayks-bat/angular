import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-pipes',
  templateUrl: './use-pipes.component.html',
  styleUrls: ['./use-pipes.component.css']
})
export class UsePipesComponent implements OnInit {
  public personName:string="";
  public searchTerm:string="";
  public ppl:any[]=["Eena","Meena","Deeka"];


  constructor() { }

  ngOnInit(): void {
  }

}
