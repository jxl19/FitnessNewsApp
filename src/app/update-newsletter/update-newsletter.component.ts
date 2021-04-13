import { Component, OnInit } from '@angular/core';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { Newsletters } from '../models/newsletters';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-newsletter',
  templateUrl: './update-newsletter.component.html',
  styleUrls: ['./update-newsletter.component.css']
})
export class UpdateNewsletterComponent implements OnInit {

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
      this.router.navigate(['/updateform'], {state: data});
    })
  }
}
