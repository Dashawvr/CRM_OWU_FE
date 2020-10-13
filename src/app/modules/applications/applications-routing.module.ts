import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {ApplicationsComponent} from './applications.component';
import {RouterTitle} from '../../constants';
import {Shell} from '../shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: ApplicationsComponent, data: {title: marker(RouterTitle.APPLICATIONS)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {
}
