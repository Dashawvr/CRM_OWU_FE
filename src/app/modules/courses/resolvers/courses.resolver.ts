import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Course, ServerData} from '../../../shared/types';
import {CoursesService} from '../services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<ServerData<Course>> {

  constructor(
    private coursesService: CoursesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerData<Course>> {
    return this.coursesService.getAll();
  }
}
