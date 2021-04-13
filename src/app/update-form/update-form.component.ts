import { Component, OnInit } from '@angular/core';
import { NewsletterServiceService } from '../services/newsletter-service.service';
import { Newsletters } from '../models/newsletters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
newState:any;
  constructor(private newsletterService: NewsletterServiceService, private router: Router) { }
 


  

  ngOnInit(): void {
    let state = window.history.state;
    console.log(state);
    this.newState = state;
  }

}
