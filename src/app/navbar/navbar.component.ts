import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  admin:boolean=false;
  isCollapsed:boolean = false;
  ngOnInit(): void {
    this.admin = localStorage.getItem('userType') == "true" ? true : false;
  }

  handleLogout() {
    localStorage.removeItem('userType');
    this.router.navigate(['/login']);
  }

  handleCNL() {
    this.router.navigate(['/createnewsletter']);
  }

  handleUNL(){
    this.router.navigate(['/updatenewsletter']);
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
