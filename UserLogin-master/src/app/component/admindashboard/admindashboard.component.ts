import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit(): void {

  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
}


