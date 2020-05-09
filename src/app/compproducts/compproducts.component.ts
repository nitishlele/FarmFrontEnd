import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../product/api.service';
import { Product } from '../product/product';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-compproducts',
  templateUrl: './compproducts.component.html',
  styleUrls: ['./compproducts.component.css']
})
export class CompproductsComponent implements OnInit {
 

  displayedColumns: string[] = ['Name','prod_name','prod_desc', 'prod_price','actions'];
  data: Product[] = [];
  isLoadingResults = true;
  info:any;
  x:any;

  constructor(private api: ApiService, private router: Router,private token: TokenStorageService) { }

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

  editProduct(element) {
    this.api.saveProduct(element);
    this.router.navigate(['/product-details', element]);
  }

}
