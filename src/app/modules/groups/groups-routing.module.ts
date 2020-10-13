import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {GroupsComponent} from './groups.component';
import {RouterTitle} from '../../constants';
import {Shell} from '../shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: GroupsComponent, data: {title: marker(RouterTitle.GROUPS)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {
}
