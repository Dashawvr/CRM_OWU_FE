import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';

import {Tokens} from '../../shared/types';
import {AuthenticationService, CredentialsService, TokensService} from '../../modules/auth/services';

@Injectable()
export class TokensInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokensService: TokensService,
    private credentialsService: CredentialsService,
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const hasTokens = !!this.tokensService.getTokens();

    const tokens = this.tokensService.getTokens();

    if (this.isRefreshing) {
      request = this.addToken(request, tokens.refresh_token);
    } else if (hasTokens) {
      request = this.addToken(request, tokens.access_token);
    } else {
      return next.handle(request);
    }


    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      if (error && error.error) {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        }
        // maybe log error here
      }
      if (error.status === 403) {
        this.isRefreshing = false;
        this.tokensService.setTokens();
        this.router.navigate(['auth'], {
          queryParams: {
            sessionFiled: true
          }
        });
      }
      return throwError(error);
    }));
  }

  addToken(request: HttpRequest<any>, token: string): any {
    return request.clone({setHeaders: {Authorization: token}});
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refresh()
        .pipe(switchMap((tokens: Tokens) => {
          this.isRefreshing = false;
          this.tokensService.setTokens(tokens);
          this.refreshTokenSubject.next(tokens.access_token);
          return next.handle(this.addToken(request, tokens.access_token));
        }));
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token != null),
      take(1),
      switchMap(jwt => {
        console.log(jwt);
        return next.handle(this.addToken(request, jwt));
      }));
  }
}
