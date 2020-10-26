import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Course} from '../../../shared/types';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) {
  }

  save(course: Course): Observable<void> {
    return this.http.post<void>('/courses', course);
  }
}
