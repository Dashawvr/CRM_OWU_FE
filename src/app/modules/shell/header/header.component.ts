import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';

import {AuthenticationService, CredentialsService} from '../../auth/services';
import {Credentials} from '../../../types';
import {AppState} from '../../../core/reducers';
import {authCredentials} from '../../auth/auth.selectors';
import {tap} from 'rxjs/operators';
import {logout} from '../../auth/auth.actions';
import {Logger, untilDestroyed} from '../../../core';

const log = new Logger('Logout');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() sidenav: MatSidenav;

  authUserCredentials: Credentials;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.authCredentialsStoreSubscription();
  }

  ngOnDestroy(): void {
  }

  authCredentialsStoreSubscription(): void {
    this.store
      .pipe(
        select(authCredentials),
        untilDestroyed(this)
      )
      .subscribe(credentials => this.authUserCredentials = credentials);
  }

  logout(): void {
    this.authenticationService
      .logout()
      .pipe(
        tap(() => {
          this.store.dispatch(logout());
          this.credentialsService.setCredentials();
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
        log.debug('successfully logout');
        this.router.navigateByUrl('/auth');
      });
  }
}
