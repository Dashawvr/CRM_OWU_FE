import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: '404', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)},


  {
    path: 'electronic-applications',
    loadChildren: () => import('./modules/electronic-applications/electronic-applications.module').then(m => m.ElectronicApplicationsModule)
  },
  {path: 'applications', loadChildren: () => import('./modules/applications/applications.module').then(m => m.ApplicationsModule)},
  {path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)},
  {path: 'clients', loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)},
  {path: 'groups', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)},
  {path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)},
  {path: 'payments', loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)},
  {path: 'cities', loadChildren: () => import('./modules/cities/cities.module').then(m => m.CitiesModule)},

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
