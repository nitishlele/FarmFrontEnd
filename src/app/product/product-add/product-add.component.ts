import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../product';
import { User } from 'src/app/user.model';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  isLoadingResults = false;
  info: { token: string; details: any; username: string; authorities: string[]; };
  x: any;
  user:User={userid:'',name:'',email:'',password:'',confirmpassword:'',address:'',registrationNumber:''}

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder ,private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      details: JSON.parse(this.token.getUserDetail()),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.x=this.info.details["id"];
  }


  onFormSubmit() {
    this.isLoadingResults = true;
    let p :Product = {id: null, name: this.prod_name , 
      description: this.prod_desc, price: this.prod_price, updated_at:null,user:{id:this.x}};
 console.log(typeof(p.user));


    this.api.addProduct(p)
      .subscribe(res => {
         // let id = res['id'];
          this.isLoadingResults = false;
        //  this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
