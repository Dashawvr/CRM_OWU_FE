import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';

import {LoginContext, Tokens} from '../../../types';
import {TokensService} from './tokens.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private tokensService: TokensService,
    private http: HttpClient
  ) {
  }

  login({email, password, remember}: LoginContext): Observable<Tokens> {
    return this.http.post<{ data: Tokens }>('/auth', {email, password}).pipe(
      map(res => res.data),
      tap(tokens => this.tokensService.setTokens(tokens, remember)),
      shareReplay()
    );
  }

  refresh(): Observable<Tokens> {
    return this.http.post<{ data: Tokens }>('/auth/refresh', null)
      .pipe(
        map(res => res.data),
        tap(tokens => this.tokensService.setTokens(tokens)),
        shareReplay()
      );
  }

  logout(): Observable<void> {
    return this.http.post<void>('/auth/logout', null).pipe(
      tap(() => this.tokensService.setTokens()),
      shareReplay()
    );
  }

  forgotPassword(email: string): Observable<void> {
    return this.http.post<void>('/auth/forgotPassword', {email});
  }

  // tslint:disable-next-line:variable-name
  resetPassword(reset_token: string, password): Observable<void> {
    return this.http.post<void>(`/auth/resetPassword/${reset_token}`, {password});
  }
}
