import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfoServiceService } from '../services/personal-info-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private router: Router,
    private personalInfoService: PersonalInfoServiceService,
    private userService: UserServiceService,
  ) {}

  email: string = '';
  password: string = '';
  invalid: string = '';
  firstName: string = '';
  lastName: string = '';
  confirmPassword: string = '';
  subChecked: any = false;
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

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleResgisterUser() {
    const user = {
      email: this.email,
      password: this.password,
      superUser: false,
    };
    this.userService.registerUser(JSON.stringify(user)).subscribe((data) => {
      const userCreated = {
        userID: data.userID,
        lName: this.lastName,
        fName: this.firstName,
        wantsMail: this.subChecked,
      };
      this.personalInfoService
        .createUser(JSON.stringify(userCreated))
        .subscribe((data) => {
          localStorage.setItem('loggedIn', "true");
          localStorage.setItem('firstName', this.firstName);
          localStorage.setItem('lastName', this.lastName);
          localStorage.setItem('id', data.userID);
          localStorage.setItem('userType', 'false');
          localStorage.setItem('wantsMail', this.subChecked.toString());
          this.router.navigate(['/homepage']);
        });
    });
  }

  handleSubmit() {
    let validEmail = this.validateEmail(this.email);
    if (this.password === this.confirmPassword && validEmail) {
      this.handleResgisterUser();
    } else {
      this.invalid = validEmail ? 'Passwords do not match' : 'Invalid Email';
    }
  }

  handleClick() {
    this.subChecked = !this.subChecked;
  }

  handleEmail(email: string) {
    this.email = email;
  }

  handlePassword(password: string) {
    this.password = password;
  }

  handleFirstName(firstName: string) {
    this.firstName = firstName;
  }

  handleLastName(lastName: string) {
    this.lastName = lastName;
  }

  handleConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;
  }
}
