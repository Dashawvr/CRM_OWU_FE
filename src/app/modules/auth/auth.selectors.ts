import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AuthState} from './reducers';


export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const authCredentials = createSelector(
  selectAuthState,
  (auth) => auth.credentials
);
