import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Farmer } from '../farmer';
import { Router } from '@angular/router';
import { ApiService } from '../product/api.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  farmerForm: FormGroup;
  farmer_name:string='';
  isLoadingResults = false;
  farmer_add: string;
  farmer_no: number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    let f :Farmer = {id: null, name: this.farmer_name , 
      address: this.farmer_add, registrationNumber: this.farmer_no ,updated_at:null} ;
 
    this.api.addFarmer(f)
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
