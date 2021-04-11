import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { Newsletters } from '../models/newsletters';
@Component({
  selector: 'app-previous-newsletter',
  templateUrl: './previous-newsletter.component.html',
  styleUrls: ['./previous-newsletter.component.css']
})
export class PreviousNewsletterComponent implements OnInit {
  
  constructor(private newsletterService: NewsletterServiceService, private router:Router) { }
  
  newsletters: Newsletters | any;
  ngOnInit(): void {
    this.newsletterService.getNewsletters().subscribe(data => {
      this.newsletters = data;
    })
  }
  goToNewsletter(id:any) {
    console.log("newsletter id ", id);
  }
}
