import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http-users',
  templateUrl: './http-users.component.html',
  styleUrls: ['./http-users.component.css']
})
export class HttpUsersComponent implements OnInit {
  public user:any;
  public showUsers(){
    var users = this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
    users.then((data)=> this.user = data);
  }

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
