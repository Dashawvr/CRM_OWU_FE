import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Credentials} from '../../../shared/types';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAuthCredentials(): Observable<Credentials> {
    return this.http.get<{ data: Credentials }>('/users/authCredentials')
      .pipe(
        map(res => res.data),
        shareReplay()
      );
  }
}
