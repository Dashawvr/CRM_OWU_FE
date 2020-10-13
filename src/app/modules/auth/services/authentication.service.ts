import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Credentials, LoginContext} from '../../../types';
import {CredentialsService} from './credentials.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private credentialsService: CredentialsService
  ) {
  }

  login(context: LoginContext): Observable<Credentials> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      token: '123456',
    };
    this.credentialsService.setCredentials(data, context.remember);
    return of(data);
  }

  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }

}
