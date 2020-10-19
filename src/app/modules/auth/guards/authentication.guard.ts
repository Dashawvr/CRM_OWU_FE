import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {Logger} from '../../../core/services';
import {TokensService} from '../services';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../core/reducers';
import {isLoggedIn} from '../auth.selectors';
import {tap} from 'rxjs/operators';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokensService: TokensService,
    private store: Store<AppState>
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {
          if (!loggedIn) {
            log.debug('Not authenticated, redirecting and adding redirect url...');
            this.router.navigateByUrl('/auth');
          }
        })
      );
  }
}
