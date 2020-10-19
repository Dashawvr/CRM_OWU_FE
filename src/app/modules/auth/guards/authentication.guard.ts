import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import {Logger} from '../../../core/services';
import {TokensService} from '../services';
import {Observable, of} from 'rxjs';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokensService: TokensService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.tokensService.isAuthenticated()) {
      return of(true);
    }

    log.debug('Not authenticated, redirecting and adding redirect url...');
    this.router.navigate(['auth'], {queryParams: {redirect: state.url}, replaceUrl: true});
    return of(false);
  }
}
