import {Routes, Route} from '@angular/router';

import {ShellComponent} from '../shell.component';
import {AuthenticationGuard} from '../../auth/guards';

export class Shell {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: {reuse: true},
    };
  }
}
