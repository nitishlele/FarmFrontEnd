import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl;
  

  constructor() { }

 ngOnInit() {
    //this.imagesUrl = ['../../assets/Farm.jpg','../../assets/walmart.jpg','../../assets/Farm.jpg'];
 }
 
}
