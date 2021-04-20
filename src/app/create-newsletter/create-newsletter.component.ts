import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterServiceService } from '../services/newsletter-service.service';

@Component({
  selector: 'app-create-newsletter',
  templateUrl: './create-newsletter.component.html',
  styleUrls: ['./create-newsletter.component.css']
})
export class CreateNewsletterComponent implements OnInit {

  constructor(private newsletterService : NewsletterServiceService, private router : Router) { }

  newsletterState = {
    header : "",
    content: "",
    footer: "",
    datePublished: "",
    authFirstName: localStorage.getItem('firstName'),
    authLastName: localStorage.getItem('lastName')
  }
//we can send some kind of token on navigate, then remove that token after and only then it will upload to s3 if token exist
  ngOnInit(): void {
  }

  createNewsLetter() {
    this.newsletterState.datePublished = new Date().toISOString().split('T')[0];
    localStorage.setItem('upload', 'true');
    this.newsletterService.createNewsletter(this.newsletterState).subscribe(res => {
      setTimeout(() => {
        this.router.navigate(['/homepage']);
      }, 1000);
    })
  }
}
