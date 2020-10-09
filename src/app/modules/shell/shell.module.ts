import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import {ShellComponent} from './shell.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {SidenavService} from './services/sidenav.service';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [SidenavService],
})
export class ShellModule {
}
