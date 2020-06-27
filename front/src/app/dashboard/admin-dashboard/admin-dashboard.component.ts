import { Component, OnInit } from '@angular/core';
import { dashboardMenuItems } from './dashboard-menu-items';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})

export class AdminDashboardComponent implements OnInit {

  dashboardMenuItems = dashboardMenuItems;

  constructor() { }

  ngOnInit(): void {
  }


}

