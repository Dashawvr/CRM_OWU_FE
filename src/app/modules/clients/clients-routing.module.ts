import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {ClientsComponent} from './clients.component';
import {RouterTitle} from '../../shared/constants';
import {Shell} from '../shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: ClientsComponent, data: {title: marker(RouterTitle.CLIENTS)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {
}
