import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ElectronicApplicationsComponent} from './electronic-applications.component';
import {ElectronicApplicationsRoutingModule} from './electronic-applications-routing.module';


@NgModule({
  declarations: [ElectronicApplicationsComponent],
  imports: [
    CommonModule,
    ElectronicApplicationsRoutingModule
  ]
})
export class ElectronicApplicationsModule {
}
