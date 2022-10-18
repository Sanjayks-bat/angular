import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {

  public comments:any;
  public user:any;
  public webApiData:any = "";
  public showComments(){
   var request = this.http.get('https://jsonplaceholder.typicode.com/comments').toPromise();
   request.then((data)=> this.comments = data);
  }

  public AccessWebApi(){
    var request = this.http.get('https://localhost:7295/allNames').toPromise();
    request.then((data)=> this.webApiData = data);
   }

   public Access2WebApi(){
    var request = this.http.get('https://localhost:7192/getRec').toPromise();
    request.then((data)=> this.webApiData = data);
   }



  constructor(public http:HttpClient) {

   }

  ngOnInit(): void {
  }

}
