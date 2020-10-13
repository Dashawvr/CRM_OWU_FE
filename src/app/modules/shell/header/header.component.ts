import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

import {AuthenticationService, CredentialsService} from '../../auth/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['auth'], {replaceUrl: true}));
  }
}
