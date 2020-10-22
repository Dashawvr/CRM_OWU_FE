import {Component, OnDestroy, OnInit} from '@angular/core';
import {Logger} from '../../../core/services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services';
import {finalize, map} from 'rxjs/operators';
import {untilDestroyed} from '../../../core';
import {CustomError} from '../../../shared/types';

const log = new Logger('Reset-password');

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  error: string | undefined;
  resetPasswordForm!: FormGroup;
  isLoading = false;
  // tslint:disable-next-line:variable-name
  reset_token: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.resetTokenRouterParamsSubscription();
  }

  ngOnDestroy(): void {
  }

  resetTokenRouterParamsSubscription(): void {
    this.route.params
      .pipe(
        map(params => params.reset_token),
        untilDestroyed(this)
      )
      // tslint:disable-next-line:variable-name
      .subscribe(reset_token => this.reset_token = reset_token);
  }

  resetPassword(): void {
    const {password} = this.resetPasswordForm.value;
    this.authenticationService.resetPassword(this.reset_token, password)
      .pipe(
        finalize(() => {
          this.resetPasswordForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
          log.debug(`Password reset successfully`);
          this.router.navigateByUrl('/auth');
        },
        (error: CustomError) => {
          log.debug(`Reset password error: ${error}`);
          this.error = error.error.message;
        });
  }

  private createForm(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkPasswordsValidator});
  }

  private checkPasswordsValidator = (group: FormGroup): null | object => {
    const {password, confirmPassword} = group.value;
    return password === confirmPassword ? null : {notSame: true};
  }
}
