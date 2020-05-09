import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../product/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  companyForm: FormGroup;
  isLoadingResults: boolean;
  comp_name: string;
  comp_add: string;
  comp_no: number;
    

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    let c :Company = {id: null, name: this.comp_name , 
      address: this.comp_add, registrationNumber: this.comp_no ,updated_at:null} ;
 
    this.api.addCompany(c)
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
