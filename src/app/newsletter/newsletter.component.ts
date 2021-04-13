import { Component, OnInit } from '@angular/core';
import { Newsletters } from '../models/newsletters';
import { NewsletterServiceService } from '../services/newsletter-service.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  constructor(private newsletterService: NewsletterServiceService) {}

  newsletter: Newsletters | any;
  mostRecentId: number = 0;
  prevId: number = 0;

  ngOnInit(): void {
    this.newsletterService.getNewsletters().subscribe((data) => {
      this.mostRecentId = data.length - 1;
    });
    this.newsletterService
      .getNewsletterById(this.mostRecentId)
      .subscribe((data) => {
        this.newsletter = data;
      });
  }

  ngAfterContentChecked(): void {
    if (this.mostRecentId !== this.prevId) {
      this.prevId = this.mostRecentId;
      this.newsletterService
        .getNewsletterById(this.mostRecentId)
        .subscribe((data) => {
          this.newsletter = data;
          console.log(this.newsletter);
        });
    }
  }
}
