import {createAction, props} from '@ngrx/store';

import {Credentials} from '../../shared/types';

export const login = createAction(
  '[Login Page] User Login',
  props<{ credentials: Credentials }>()
);

export const logout = createAction(
  '[Header Menu] Logout'
);
