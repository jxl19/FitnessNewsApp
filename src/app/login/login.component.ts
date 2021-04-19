import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router) { }
  email:string = "";
  password:string ="";
  invalid:string="";
  login: Login | any;

  ngOnInit(): void {
    document.body.classList.add('landing');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }
  
  handleSubmit(e:any) {
    e.preventDefault();
    this.loginService.loginUser(this.email).subscribe(data => {
      if(data.email === this.email && data.password === this.password){
          console.log(data);
          localStorage.setItem('firstName', data.personalInfo.fName);
          localStorage.setItem('lastName', data.personalInfo.lName);
          localStorage.setItem('id', data.personalInfo.userID);
          localStorage.setItem('userType', data.superUser.toString());
          localStorage.setItem('wantsMail', data.personalInfo.wantsMail.toString());
          this.router.navigate(['/homepage']);
      }
      this.invalid = "Invalid Username or Password";
    },
    (error) => {
      console.log(error);
      this.invalid = "Invalid Username or Password";
    })
  }
  handleEmail(email:string) {
    this.email = email;
  }
  handlePassword(password:string) {
    this.password = password;
  }
  goToLanding() {
    this.router.navigate(['/']);
  }
  requestPassword() {
    console.log("req pass");
  }

  forgotPassPage() {
    this.router.navigate(['/forgotpass']);
  }
}
