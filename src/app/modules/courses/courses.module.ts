import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

import {CoursesComponent} from './courses.component';
import {CoursesRoutingModule} from './courses-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class CoursesModule {
}
