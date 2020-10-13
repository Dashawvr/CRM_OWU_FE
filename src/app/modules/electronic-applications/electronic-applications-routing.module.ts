import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {ElectronicApplicationsComponent} from './electronic-applications.component';
import {Shell} from '../shell/services/shell.service';
import {RouterTitle} from '../../constants';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: ElectronicApplicationsComponent, data: {title: marker(RouterTitle.ELECTRONIC_APPLICATIONS)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronicApplicationsRoutingModule {
}
