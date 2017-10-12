import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'accounts', title: 'Accounts',  icon: '', class: '' },
    { path: 'AVS', title: 'AVS',  icon:'', class: '' },
    { path: 'contactUs', title: 'Contact us',  icon:'', class: '' },
    { path: 'profile-limit',   title:  'Profile Limit',  icon:'', class: ''  },
    { path: 'transactionHistory', title: 'Transaction history',  icon:'', class: '' },
    { path: 'maintainOverdraft', title: 'Maintain overdraft',  icon:'', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
