import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ResetServiceService } from '../services/reset-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  password:string = "";
  token:any;
  status:string = "";
  response:string = "";

  constructor(private resetservice:ResetServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
}
  handlePassword(password:string){
    this.password = password;
}
handleSubmit(e:any) {
    e.preventDefault();
    const token = this.route.snapshot.queryParams;
    let passwordtoken= {"token": token.token, "password": this.password};
    this.resetservice.postPasswordByToken(JSON.stringify(passwordtoken)).subscribe(data => {
      console.log(data)
      this.status = data.status
      this.response = data.response
      this.router.navigate(['/login']);
    })
    
  }

  goToLanding() {
    this.router.navigate(['/']);
  }


}
