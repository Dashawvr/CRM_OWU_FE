import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';

import {AuthActions} from './action.types';

const credentialsKey = 'credentials';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.login),
          tap(action => localStorage.setItem(credentialsKey, JSON.stringify(action.credentials)))),
    {dispatch: false});

  logout$ = createEffect(() => this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(() => localStorage.removeItem(credentialsKey))),
    {dispatch: false});

  constructor(private actions$: Actions) {
  }
}
