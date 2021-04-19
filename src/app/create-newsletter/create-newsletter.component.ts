import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-create-newsletter',
  templateUrl: './create-newsletter.component.html',
  styleUrls: ['./create-newsletter.component.css'],
  providers: [DatePipe]
})
export class CreateNewsletterComponent implements OnInit {

  constructor(private newsletterService: NewsletterServiceService, private router: Router, private datePipe: DatePipe) { }
  id: any;
  myDate = new Date('short');
  header:string="";
  content:string="";
  footer:string="";
  authLastName:string="";
  authFirstName:string="";
  creationDate:string="";

  ngOnInit(): void {
    let state = window.history.state;
    console.log("state", state);
  }

  handleSubmit(e:any) {
    e.preventDefault();
    let newsletter = {"datePublished":new Date(), "header":this.header, "content":this.content,
    "authFirstName":localStorage.getItem('authFirst'), "authLastName":localStorage.getItem('authLast'), "footer":this.footer}
    this.newsletterService.createNewsletter(JSON.stringify(newsletter)).subscribe(data=>{
      console.log(data)
    })
    
  }

}
