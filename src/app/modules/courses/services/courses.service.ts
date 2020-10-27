import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {Course, CourseParams, ServerData} from '../../../shared/types';
import {createHttpParams} from '../../../core/helpers/httpParams.helper';

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

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/courses/' + id);
  }

  getAll(query?: CourseParams): Observable<ServerData<Course>> {
    return this.http.get<{ data: ServerData<Course> }>('/courses', {
      params: createHttpParams(query)
    })
      .pipe(
        map(res => res.data),
        shareReplay()
      );
  }
}
