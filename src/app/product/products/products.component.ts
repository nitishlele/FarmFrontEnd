import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  displayedColumns: string[] = ['user_id','Name','prod_name','prod_desc', 'prod_price','actions'];
  data: Product[] = [];
  isLoadingResults = true;
  user:any;
  info:any;
  x:any;

  constructor(private api: ApiService, private router: Router,private token: TokenStorageService) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      details: JSON.parse(this.token.getUserDetail()),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    // this.x=this.info.details["id"],
    
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
