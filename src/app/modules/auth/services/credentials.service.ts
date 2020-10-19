import {Injectable} from '@angular/core';

import {Credentials} from '../../../types';

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private credentials: Credentials | null = null;

  constructor() {
    const savedCredentials = localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  getCredentials(): Credentials | null {
    return this.credentials;
  }

  setCredentials(credentials: Credentials = null): void {
    this.credentials = credentials;

    if (!credentials) {
      return localStorage.removeItem(credentialsKey);
    }

    localStorage.setItem(credentialsKey, JSON.stringify(credentials));
  }
}
