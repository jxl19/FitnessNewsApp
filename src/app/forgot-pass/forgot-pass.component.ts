import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotServiceService } from '../services/forgot-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  constructor(private forgotService: ForgotServiceService, private router:Router, private http:HttpClient) { }
  email:string = "";
  status:string = "";
  response:string = "";

  ngOnInit(): void {
    document.body.classList.add('landing');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('landing');
  }
  
  handleEmail(email:string){
      this.email = email;
  }

  handleSubmit(e:any) {
    e.preventDefault();
    this.forgotService.accessSpecificEmail(this.email).subscribe(data => {
      this.status = data.status
      this.response = data.response
    });
  }
  goToLanding() {
    this.router.navigate(['/']);
  }


}
