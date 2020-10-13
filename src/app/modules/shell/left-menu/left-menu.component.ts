import {Component, OnInit} from '@angular/core';

import {SidenavService} from '../services';
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
    {name: 'Завдання', link: '/tasks', icon: 'filter_frames'},
    {name: 'Ел. Заяви', link: '/electronic-applications', icon: 'email'},
    {name: 'Заявки', link: '/applications', icon: 'list_alt'},
    {name: 'Платежі', link: '/payments', icon: 'payment'},
    {name: 'Клієнти', link: '/clients', icon: 'perm_identity'},
    {name: 'Групи', link: '/groups', icon: 'people_outline'},
    {name: 'Курси', link: '/courses', icon: 'school'},
    {name: 'Міста', link: '/cities', icon: 'location_city'},
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
