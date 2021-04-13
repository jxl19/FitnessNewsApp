import { Component, OnInit } from '@angular/core';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-previous-form',
  templateUrl: './previous-form.component.html',
  styleUrls: ['./previous-form.component.css']
})
export class PreviousFormComponent implements OnInit {
  newState:any;
  id: any;

  constructor(private newsletterService: NewsletterServiceService, private router: Router,  private route:ActivatedRoute) { }

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
