import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {Shell} from '../shell/services';

const routes: Routes = [
  Shell.childRoutes([
    // {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', component: HomeComponent}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
