import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import { SignUpInfo} from '../auth/signup-info';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  role= '';
 
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
      this.role = params['role'];
      this.form.role = Array.of(this.role)
      });
      console.log(this.role);
  }

  onSubmit() {

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.address,
      this.form.registrationNumber,
      this.form.role);
 
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      },

    );
  }

}
