import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  info: any;
 detail: any;

  constructor(private token: TokenStorageService) { }
 
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      details:JSON.parse(this.token.getUserDetail()),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  public getId(details){
     for(this.detail in details){
       return details["id"];
     }
  }
 

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
