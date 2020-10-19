import {Component, OnInit} from '@angular/core';

import {onMainContentChange} from './animations/animations';
import {SidenavService} from './services/sidenav.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  animations: [onMainContentChange]
})
export class ShellComponent implements OnInit {

  onSideNavChange: boolean;

  constructor(
    private sidenavService: SidenavService,
  ) {
    this.sidenavService.sideNavState.subscribe(res => this.onSideNavChange = res);
  }

  ngOnInit(): void {
  }

}
