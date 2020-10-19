import {Component, OnDestroy, OnInit} from '@angular/core';
import {Logger} from '../../../core/services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services';
import {untilDestroyed} from '../../../core';
import {finalize} from 'rxjs/operators';

const log = new Logger('Forgot password');

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  error: string | undefined;
  forgotPasswordForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  sendEmail(): void {
    const {email} = this.forgotPasswordForm.value;

    this.authenticationService.forgotPassword(email)
      .pipe(
        finalize(() => {
          this.forgotPasswordForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
          log.debug(`email for password reset successfully sent`);
          this.router.navigateByUrl('/auth');
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        });
  }

  private createForm(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

}
