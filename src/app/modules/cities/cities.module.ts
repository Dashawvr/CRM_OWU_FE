import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CitiesComponent} from './cities.component';
import {CitiesRoutingModule} from './cities-routing.module';


@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule {
}
