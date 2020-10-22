import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';


import {ApplicationsComponent} from './applications.component';
import {ApplicationsRoutingModule} from './applications-routing.module';


@NgModule({
  declarations: [ApplicationsComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class ApplicationsModule {
}
