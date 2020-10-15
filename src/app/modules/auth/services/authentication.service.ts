import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {LoginContext, Tokens} from '../../../types';
import {TokensService} from './tokens.service';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private tokensService: TokensService,
    private http: HttpClient
  ) {
  }

  login({email, password, remember}: LoginContext): Observable<any> {
    return this.http.post<any>('/auth', {email, password}).pipe(
      map(res => res.data),
      tap(tokens => this.tokensService.setTokens(tokens, remember)),
    );
  }

  refresh(): Observable<Tokens> {
    return this.http.post<{ data: Tokens }>('/auth/refresh', null)
      .pipe(
        map(res => res.data),
        tap(tokens => this.tokensService.setTokens(tokens)),
      );
  }

  logout(): Observable<void> {
    return this.http.post<void>('/auth/logout', null).pipe(
      tap(() => this.tokensService.setTokens()));
  }

}
