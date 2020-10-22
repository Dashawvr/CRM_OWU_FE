import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-application-form-dialog',
  templateUrl: './create-application-form-dialog.component.html',
  styleUrls: ['./create-application-form-dialog.component.css']
})
export class CreateApplicationFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateApplicationFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
