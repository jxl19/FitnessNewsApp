import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginServiceService } from '../services/login-service.service';
// import {HttpClient} from '@angu'

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
  }
  handleSubmit(e:any) {
    e.preventDefault();
    this.loginService.loginUser(this.email).subscribe(data=> {
      if(data.id === this.email && data.password === this.password){
        this.router.navigate(['/homepage'])
      }
      this.invalid = "Invalid Username or Password";
      console.log(data);
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
}
