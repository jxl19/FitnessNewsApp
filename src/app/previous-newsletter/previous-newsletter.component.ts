import { Component, OnInit } from '@angular/core';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { Newsletters } from '../models/newsletters';
import { Router } from '@angular/router';
@Component({
  selector: 'app-previous-newsletter',
  templateUrl: './previous-newsletter.component.html',
  styleUrls: ['./previous-newsletter.component.css']
})
export class PreviousNewsletterComponent implements OnInit {
  
  constructor(private newsletterService: NewsletterServiceService, private router: Router) { }
  
  newsletters: Newsletters | any;
  newsletter: Newsletters | any;
  ngOnInit(): void {
    this.newsletterService.getNewsletters().subscribe(data => {
      this.newsletters = data;
    })
  }
  goToNewsletter(id:any) {
    this.newsletterService.getNewsletterById(id).subscribe(data => {
      this.router.navigate(['/createnewsletter'], {state: data});
    })
  }
}
