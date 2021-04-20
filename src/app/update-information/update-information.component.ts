import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfoServiceService } from '../services/personal-info-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.css']
})
export class UpdateInformationComponent implements OnInit {

  constructor(private router:Router, private personInfoService : PersonalInfoServiceService, private userService : UserServiceService) { }

  ngOnInit(): void {
  }

  password:string="";
  response:string="";
  firstName:any=localStorage.getItem('firstName');
  lastName:any=localStorage.getItem('lastName');
  confirmPassword:string="";
  subChecked:any = localStorage.getItem('wantsMail') === "true" ? true : false;
  timer:any;
  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }

  handleSubmit() {
    const userData = {
      "fName" : this.firstName,
      "lName" : this.lastName,
      "wantsMail" : this.subChecked
    }
    if (this.password === this.confirmPassword) {
      if (this.password.length > 0) {
        this.userService.updatepassword(localStorage.getItem('id'), {"password" : this.password}).subscribe(res => {
        });
      }
      this.personInfoService.updateUser(localStorage.getItem('id'), userData).subscribe(res => {
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('wantsMail');
        localStorage.setItem('firstName', res.fName);
        localStorage.setItem('lastName', res.lName);
        localStorage.setItem('wantsMail', res.wantsMail);
      })
      this.response = "Successfully updated information. Redirecting to homepage..";
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 2000);
    } else {
      this.response = "Password and Confirm Password needs to match";
    }
  }

  handleClick() {
    this.subChecked = !this.subChecked;
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
