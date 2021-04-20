import { Component, OnInit } from '@angular/core';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  constructor(private newsletterService: NewsletterServiceService, private router: Router, private route:ActivatedRoute) { }
  newState:any;
  id: any;
  header:string="";
  content:string="";
  footer:string="";
  authLastName:string="";
  authFirstName:string="";
  creationDate:string="";

  handleSubmit(e:any) {
    e.preventDefault();
    this.newsletterService.updateNewsletter(this.id, this.newState).subscribe(data=>{
      this.router.navigate(['/updatenewsletter']);
    })
    
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
