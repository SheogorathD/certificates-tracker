import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'certificates', icon: 'pi-calendar', routerLink: '/' },
      {
        label: 'add certificate',
        icon: 'pi-calendar-plus',
        routerLink: 'add-certificate',
      },
    ];
  }
}
