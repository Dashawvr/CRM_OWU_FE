import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AuthenticationService} from '../../auth/services';
import {Credentials} from '../../../types';
import {AppState} from '../../../core/reducers';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  authUserCredentials: Credentials;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store
      .pipe(
        // TODO types
        // @ts-ignore
        map(state => state.auth.credentials)
      ).subscribe(credentials => this.authUserCredentials = credentials);
  }

  logout(): void {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['auth'], {replaceUrl: true}));
  }
}
