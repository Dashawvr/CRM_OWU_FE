import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {marker} from '@biesbjerg/ngx-translate-extract-marker';

import {NotFoundComponent} from './not-found.component';
import {RouterTitle} from '../../constants';

const routes: Routes = [
  {path: '', component: NotFoundComponent, data: {title: marker(RouterTitle.NOT_FOUND)}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {
}
