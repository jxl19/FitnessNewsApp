import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotServiceService } from '../services/forgot-service.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  constructor(private forgotService: ForgotServiceService, private router:Router) { }
  email:string = "";

  ngOnInit(): void {
  }

  handleEmail(email:string){
      this.email = email;
  }

  handleSubmit(e:any) {
    e.preventDefault();
    this.forgotService.accessSpecificEmail(this.email).subscribe(data => {
      console.log(data)
    })
  }
  goToLanding() {
    this.router.navigate(['/']);
  }


}
