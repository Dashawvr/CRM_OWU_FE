import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {CourseCreateFormDialogComponent} from './entryComponents/course-create-form-dialog/course-create-form-dialog.component';
import {ApplicationCreateFormDialogComponent} from './entryComponents/application-create-form-dialog/application-create-form-dialog.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    ApplicationCreateFormDialogComponent,
    CourseCreateFormDialogComponent,
    ApplicationCreateFormDialogComponent,
    CoursesTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  entryComponents: [
    ApplicationCreateFormDialogComponent,
    CourseCreateFormDialogComponent
  ],
  exports: [
    ApplicationCreateFormDialogComponent,
    CourseCreateFormDialogComponent,
    CoursesTableComponent
  ]
})
export class SharedModule {
}
