import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email:string = "";
  password:string ="";
  // user: [
  //   {

  //   }
  // ]
  ngOnInit(): void {
  }
  handleSubmit(e:any) {
    e.preventDefault();
    alert(`email: ${this.email} password: ${this.password}`)
  }
  handleEmail(email:string) {
    console.log('email', email);
    this.email = email;
  }
  handlePassword(password:string) {
    console.log('password', password);
    this.password = password;
  }
}
