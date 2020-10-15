import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AuthenticationService, TokensService} from '../../modules/auth/services';

@Injectable()
export class TokensInterceptor implements HttpInterceptor {

  constructor(
    private tokensService: TokensService,
    private authService: AuthenticationService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens = this.tokensService.getTokens();
    //
    if (!this.tokensService.isAuthenticated()) {
      return next.handle(request);
    }

    return next.handle(request.clone({setHeaders: {Authorization: tokens.access_token}}));
    // const requestWithTokenAccessToken = this.addAccessTokenToRequest(request, tokens.access_token);
    // // const requestWithTokenRefreshToken = request.clone({setHeaders: {Authorization: refresh_token}});
    // return next.handle(requestWithTokenAccessToken).pipe(
    //   catchError(() => {
    //     this.authService.refresh()
    //       .pipe()
    //       .subscribe(refreshedTokens => tokens = refreshedTokens);
    //     return next.handle(this.addAccessTokenToRequest(request, tokens.access_token));
    //   })
    // );
  }

  // addAccessTokenToRequest(request: HttpRequest<any>, accessToken: string): HttpRequest<any> {
  //   return request.clone({setHeaders: {Authorization: accessToken}});
  // }
}
