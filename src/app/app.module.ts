import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
registerLocaleData(localeUk, 'uk-UA');

import {CoreModule} from './core';
import {AppRoutingModule} from './app-routing.module';
import {ShellModule} from './modules/shell/shell.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {authReducer} from './modules/auth/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    ShellModule,
    // reducers, {metaReducers}
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'uk-UA' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
