import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar,
    private zone: NgZone) {
  }

  showError(message: string, action = 'Добре'): void {
    this.zone.run(() => {
      this._snackBar.open(message, action, {
        duration: 5000,
        panelClass: 'snack-bar-error'
      });
    });
  }

  successMessage(message: string): void {
    this.zone.run(() => {
      this._snackBar.open(message, null, {
        duration: 4000,
        panelClass: 'snack-bar-successes'
      });
    });
  }
}
