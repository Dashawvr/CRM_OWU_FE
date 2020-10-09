import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {HomeComponent} from './home.component';
import {Shell} from '../shell/services';
import {RouterTitle} from '../../constants';

const routes: Routes = [
  Shell.childRoutes([
    // {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', component: HomeComponent, data: {title: marker(RouterTitle.HOME)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
