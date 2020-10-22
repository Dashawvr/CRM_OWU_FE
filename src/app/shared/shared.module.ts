import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {CreateApplicationFormDialogComponent} from './entryComponents/create-application-form-dialog/create-application-form-dialog.component';


@NgModule({
  declarations: [
    CreateApplicationFormDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    CreateApplicationFormDialogComponent
  ],
  exports: [
    CreateApplicationFormDialogComponent
  ]
})
export class SharedModule {
}
