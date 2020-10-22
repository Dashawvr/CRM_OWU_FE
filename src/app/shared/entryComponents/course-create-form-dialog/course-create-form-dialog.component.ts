import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
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
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

}
