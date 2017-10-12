import { Component, OnInit, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

declare const $: any;
declare interface NavTitle {
    title: string;
    path: string;
}

export const TITLES: NavTitle[] = [
    { path: 'accounts', title: 'Accounts' },
    { path: 'AVS', title: 'AVS' },
    { path: 'contactUs', title: 'Contact us' },
    { path: 'profile-limit',   title:  'Profile Limit' },
    { path: 'profile-limit-update/:limitType',   title: 'Profile Limit Update' },
    { path: 'transactionHistory', title: 'Transaction history' },
    { path: 'transactionDetail', title: 'Transaction detail' },
    { path: 'maintainOverdraft', title: 'Maintain overdraft' },
    { path: 'detailedBalance', title: 'Detailed Balances' }
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,  private element: ElementRef) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
      this.listTitles = TITLES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var title = this.location.prepareExternalUrl(this.location.path()).toLocaleLowerCase();

      for (let item = 0; item < this.listTitles.length; item++) {
          if (title.includes(this.listTitles[item].path.toLocaleLowerCase())) {
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
