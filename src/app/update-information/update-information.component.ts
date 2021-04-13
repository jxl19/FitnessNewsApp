import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.css']
})
export class UpdateInformationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  password:string="";
  error:string="";
  firstName:string="";
  lastName:string="";
  confirmPassword:string="";
  subChecked:any = false;
  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }

  goToLanding() {
    this.router.navigate(['/']);
  }

  handleSubmit(e:any) {
    console.log({password: this.password, confirm:this.confirmPassword, fn: this.firstName, ln: this.lastName, wantsMail: this.subChecked});
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
