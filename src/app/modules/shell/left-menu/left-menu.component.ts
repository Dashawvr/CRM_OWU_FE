import {Component, OnInit} from '@angular/core';

import {SidenavService} from '../services/sidenav.service';
import {animateText, onSideNavChange} from '../animations/animations';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  sideNavState = false;
  linkText = false;

  pages: Page[] = [
    {name: 'Ел. Заявки', link: 'some-link', icon: 'email'},
    {name: 'Заявки', link: 'some-link', icon: 'list_alt'},
    {name: 'Завдання', link: 'some-link', icon: 'filter_frames'},
    {name: 'Клієнти', link: 'some-link', icon: 'perm_identity'},
    {name: 'Групи', link: 'some-link', icon: 'people_outline'},
    {name: 'Курси', link: 'some-link', icon: 'school'},
    {name: 'Платежі', link: 'some-link', icon: 'payment'},
    {name: 'Міста', link: 'some-link', icon: 'location_city'},
  ];

  constructor(
    private sidenavService: SidenavService
  ) {
  }

  ngOnInit(): void {
  }

  onSidenavToggle(): void {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);

    this.sidenavService.sideNavState.next(this.sideNavState);
  }
}
