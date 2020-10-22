import {createReducer, on} from '@ngrx/store';

import {Credentials} from '../../../shared/types';
import {AuthActions} from '../action.types';

export const authFeatureKey = 'auth';

export interface AuthState {
  credentials: Credentials;
}

export const initialAuthState: AuthState = {
  credentials: undefined
};

// export const reducers: ActionReducerMap<AuthState> = {};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      credentials: action.credentials
    };
  }),
  on(AuthActions.logout, () => initialAuthState)
);
