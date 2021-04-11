import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router : Router) { }
  
  email:string="";
  password:string="";
  invalid:string="";
  firstName:string="";
  lastName:string="";
  confirmPassword:string="";

  ngOnInit(): void {
    document.body.classList.add('landing');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }

  goToLanding() {
    this.router.navigate(['/']);
  }

  handleSubmit(e:any) {
    // console.log({email: this.email, password: this.password, confirm:this.confirmPassword, fn: this.firstName, ln: this.lastName});
    
  }

  handleEmail(email:string) {
    this.email = email;
  }

  handlePassword(password:string) {
    this.password = password;
  }

  handleFirstName(firstName:string) {
    this.firstName = firstName;
  }

  handleLastName(lastName:string) {
    this.lastName = lastName;
  }

  handleConfirmPassword(confirmPassword:string){
    this.confirmPassword = confirmPassword;
  }

}
