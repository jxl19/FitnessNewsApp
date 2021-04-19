import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { PersonalInfoServiceService } from '../services/personal-info-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router : Router, private personalInfoService : PersonalInfoServiceService, private userService: UserServiceService, private loginService : LoginServiceService) { }
  
  email:string="";
  password:string="";
  invalid:string="";
  firstName:string="";
  lastName:string="";
  confirmPassword:string="";
  subChecked:any = false;
  userId: any;

  ngOnInit(): void {
    document.body.classList.add('landing');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }

  goToLanding() {
    this.router.navigate(['/']);
  }

   handleResgisterUser() {
    const user = {"email" : this.email, "password" : this.password, "superUser" : false}
    this.userService.registerUser(JSON.stringify(user)).subscribe(data => {
      const userCreated = {"userID" : data.userID, "lName" : this.lastName, "fName" : this.firstName, "wantsMail" : this.subChecked};
    this.personalInfoService.createUser(JSON.stringify(userCreated)).subscribe(data=> {
      localStorage.setItem('firstName', this.firstName);
      localStorage.setItem('lastName', this.lastName);
      localStorage.setItem('id', data.userID);
      localStorage.setItem('userType', "false");
      localStorage.setItem('wantsMail', this.subChecked.toString());
      this.router.navigate(['/homepage']);
      // console.log(localStorage.getItem('firstName'), localStorage.getItem('lastName'), localStorage.getItem('id'), localStorage.getItem('userType'), localStorage.getItem('wantsMail'));
    })
    })
  }

  handleSubmit() {
    console.log({email: this.email, password: this.password, confirm:this.confirmPassword, fn: this.firstName, ln: this.lastName, wantsMail: this.subChecked});
    this.handleResgisterUser();
  }

  handleClick() {
    this.subChecked = !this.subChecked;
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
