import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {Shell} from '../shell/services';
import {RouterTitle} from '../../constants';
import {ElectronicApplicationsComponent} from './electronic-applications.component';

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
