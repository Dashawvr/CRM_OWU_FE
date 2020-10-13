import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {CitiesComponent} from './cities.component';
import {RouterTitle} from '../../constants';
import {Shell} from '../shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: CitiesComponent, data: {title: marker(RouterTitle.CITIES)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitiesRoutingModule {
}
