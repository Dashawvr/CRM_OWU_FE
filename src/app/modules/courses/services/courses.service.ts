import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {Course, ServerData} from '../../../shared/types';

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

  getAll(): Observable<ServerData<Course>> {
    return this.http.get<{ data: ServerData<Course> }>('/courses')
      .pipe(
        map(res => res.data),
        shareReplay()
      );
  }
}
