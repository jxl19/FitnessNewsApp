import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-newsletter',
  templateUrl: './create-newsletter.component.html',
  styleUrls: ['./create-newsletter.component.css']
})
export class CreateNewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let state = window.history.state;
    console.log("state", state);
  }

}
