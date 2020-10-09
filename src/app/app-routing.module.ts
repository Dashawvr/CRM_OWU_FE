import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: '404', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)},


  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
