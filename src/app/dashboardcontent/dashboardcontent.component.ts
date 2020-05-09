import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ApiService } from '../product/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardcontent',
  templateUrl: './dashboardcontent.component.html',
  styleUrls: ['./dashboardcontent.component.css']
})
export class DashboardcontentComponent implements OnInit {

  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  public getRowsValue() {
    return this.data.length;
}

}
