import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'certificates',
        icon: PrimeIcons.CALENDAR,
        routerLink: 'certificates',
      },
      {
        label: 'add certificate',
        icon: PrimeIcons.CALENDAR_PLUS,
        routerLink: 'add-certificate',
      },
    ];
  }
}
