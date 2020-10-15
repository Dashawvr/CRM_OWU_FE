import {Injectable} from '@angular/core';

import {Tokens} from '../../../types';

const tokensKey = 'tokens';

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  private tokens: Tokens | null = null;

  constructor() {
    const savedTokens = sessionStorage.getItem(tokensKey) || localStorage.getItem(tokensKey);
    if (savedTokens) {
      this.tokens = JSON.parse(savedTokens);
    }
  }

  isAuthenticated(): boolean {
    return !!this.tokens;
  }

  getTokens(): Tokens | null {
    return this.tokens;
  }

  setTokens(tokens?: Tokens, remember = true): void {
    this.tokens = tokens || null;

    if (tokens) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(tokensKey, JSON.stringify(tokens));
    } else {
      sessionStorage.removeItem(tokensKey);
      localStorage.removeItem(tokensKey);
    }
  }
}
