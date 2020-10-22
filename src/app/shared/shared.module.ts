import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {CourseCreateFormDialogComponent} from './entryComponents/course-create-form-dialog/course-create-form-dialog.component';
import {ApplicationCreateFormDialogComponent} from './entryComponents/application-create-form-dialog/application-create-form-dialog.component';


@NgModule({
  declarations: [
    ApplicationCreateFormDialogComponent,
    CourseCreateFormDialogComponent,
    ApplicationCreateFormDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    ApplicationCreateFormDialogComponent,
    CourseCreateFormDialogComponent
  ],
  exports: [
    ApplicationCreateFormDialogComponent,
    CourseCreateFormDialogComponent
  ]
})
export class SharedModule {
}
