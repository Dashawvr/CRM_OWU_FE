import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {AppState, untilDestroyed} from './core';
import {AuthenticationService, CredentialsService} from './modules/auth/services';
import {login} from './modules/auth/auth.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.checkIsUserLoggedIn();
    this.urlTitleChangeSubscription();
  }

  ngOnDestroy(): void {
  }

  checkIsUserLoggedIn(): void {
    const credentials = this.credentialsService.getCredentials();

    if (credentials) {
      this.store.dispatch(login({credentials}));
    }
  }

  urlTitleChangeSubscription(): void {
    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    onNavigationEnd.pipe(
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      switchMap((route) => route.data),
      untilDestroyed(this)
    )
      .subscribe((event) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(title);
        }
      });
  }
}
