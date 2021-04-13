import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  userType:boolean=false;
  
  ngOnInit(): void {
    let user = localStorage.getItem('userType');
    this.userType = user === "true" ? true : false;
  }

  handleLogout() {
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }

  handleCNL() {
    this.router.navigate(['/createnewsletter']);
  }

  goToHomePage() {
    this.router.navigate(['/homepage']);
  }

  handleUpdateInfo() {
    this.router.navigate(['/updateinfo']);
  }

  goToPrevNews() {
    this.router.navigate(['/previousnewsletters']);
  }
}
