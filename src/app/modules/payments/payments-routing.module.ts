import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {PaymentsComponent} from './payments.component';
import {RouterTitle} from '../../constants';
import {Shell} from '../shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: PaymentsComponent, data: {title: marker(RouterTitle.PAYMENTS)}}
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {
}
