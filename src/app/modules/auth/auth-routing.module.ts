import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RouterTitle} from '../../constants';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent, data: {title: marker(RouterTitle.LOGIN)}},
      {path: 'forgot-password', component: ForgotPasswordComponent, data: {title: marker(RouterTitle.FORGOT_PASSWORD)}},
      {path: 'forgot-password/:reset_token', component: ResetPasswordComponent, data: {title: marker(RouterTitle.RESET_PASSWORD)}}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
