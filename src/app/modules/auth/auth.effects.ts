import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';

import {AuthActions} from './action.types';
import {CredentialsService} from './services';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.login),
          tap(action => this.credentialsService.setCredentials(action.credentials))),
    {dispatch: false});

  logout$ = createEffect(() => this.actions$
      .pipe(
        ofType(AuthActions.logout),
        tap(() => this.credentialsService.setCredentials())),
    {dispatch: false});

  constructor(
    private actions$: Actions,
    private credentialsService: CredentialsService
  ) {
  }
}
