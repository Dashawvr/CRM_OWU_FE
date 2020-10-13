import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {CoursesComponent} from './courses.component';
import {RouterTitle} from '../../constants';
import {Shell} from '../shell/services';

const routes: Routes = [
  Shell.childRoutes([
    {path: '', component: CoursesComponent, data: {title: marker(RouterTitle.COURSES)}}
  ]),
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {
}
