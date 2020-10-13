import {Injectable} from '@angular/core';

import {Credentials} from '../../../types';

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private credentials: Credentials | null = null;

  constructor() {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
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

  setCredentials(credentials?: Credentials, remember?: boolean): void {
    this.credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }
}
