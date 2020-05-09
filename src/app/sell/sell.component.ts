import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../product/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sell } from '../sell';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sellForm: FormGroup;
  isLoadingResults: boolean;
  name: string;
  startRange: number;
  endRange: number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    let s :Sell = {id: null, name: this.name , 
      startRange: this.startRange, endRange: this.endRange ,updated_at:null} ;
 
    this.api.addSell(s)
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
