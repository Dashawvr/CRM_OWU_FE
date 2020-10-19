import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {finalize, switchMap, tap} from 'rxjs/operators';

import {AuthenticationService} from '../services';
import {AppState, Logger, untilDestroyed} from '../../../core';
import {UsersService} from '../../users/services/users.service';
import {login} from '../auth.actions';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private usersService: UsersService,
    private store: Store<AppState>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  login(): void {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);

    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        }),
        switchMap(() => this.usersService.getAuthCredentials()
          .pipe(
            tap(credentials => this.store.dispatch(login({credentials})))
          )),
        untilDestroyed(this)
      )
      .subscribe(
        (credentials) => {
          log.debug(`${credentials.name} successfully logged in`);
          this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], {replaceUrl: true});
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
