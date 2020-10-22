import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-application-create-form-dialog',
  templateUrl: './application-create-form-dialog.component.html',
  styleUrls: ['./application-create-form-dialog.component.css']
})
export class ApplicationCreateFormDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ApplicationCreateFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
