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
    const data = {
      email: context.email
    };
    this.credentialsService.setCredentials(data, context.remember);
    return of(data);
  }

  logout(): Observable<boolean> {
    this.credentialsService.setCredentials();
    return of(true);
  }

}
