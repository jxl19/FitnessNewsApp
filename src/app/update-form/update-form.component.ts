import { Component, OnInit } from '@angular/core';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
newState:any;
  constructor(private newsletterService: NewsletterServiceService, private router: Router, private route:ActivatedRoute) { }
  id: any;

  header:string="";
  content:string="";
  footer:string="";
  authLastName:string="";
  authFirstName:string="";
  creationDate:string="";

  handleSubmit(e:any) {
    console.log({header: this.header, content:this.content, fn: this.authFirstName, ln: this.authLastName, cd:this.creationDate});
    
  }
  

  ngOnInit(): void {
    let state = window.history.state;
    this.newState = state;
    if(this.newState != true){
      this.route.paramMap.subscribe(params => {
        this.newState = params.get("id");
          this.id = params.get("id");
                this.newsletterService.getNewsletterById(this.id).subscribe(data=>{
          this.newState=data;
        })
      })

    }

  }

}
