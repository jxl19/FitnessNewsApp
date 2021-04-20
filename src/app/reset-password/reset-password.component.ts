import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ResetServiceService } from '../services/reset-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  password: string = '';
  token: any;
  status: string = '';
  response: string = '';
  confirmPassword: string= '';

  constructor(
    private resetservice: ResetServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    document.body.classList.add('landing');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }

  handleConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;
  }

  handlePassword(password: string) {
    this.password = password;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    if (this.password === this.confirmPassword) {
      const token = this.route.snapshot.queryParams;
      let passwordtoken = { token: token.token, password: this.password };
      this.resetservice
        .postPasswordByToken(JSON.stringify(passwordtoken))
        .subscribe((data) => {
          this.status = data.status;
          this.response = data.response;
        });
    } else {
      this.response = "Password does not match";
    }
  }

  goToLanding() {
    this.router.navigate(['/']);
  }
}
