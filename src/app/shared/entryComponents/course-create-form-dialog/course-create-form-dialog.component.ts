import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Course} from '../../types';

@Component({
  selector: 'app-course-create-form-dialog',
  templateUrl: './course-create-form-dialog.component.html',
  styleUrls: ['./course-create-form-dialog.component.css']
})
export class CourseCreateFormDialogComponent implements OnInit {
  error: string | undefined;
  courseForm!: FormGroup;
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<CourseCreateFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  private createForm(): void {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^([^0-9]*)$')]],
      price: ['', Validators.required],
    });
  }

  get name(): AbstractControl {
    return this.courseForm.controls.name;
  }

  get price(): AbstractControl {
    return this.courseForm.controls.price;
  }

  create(): void {
    this.dialogRef.close(this.courseForm.value);
  }
}
