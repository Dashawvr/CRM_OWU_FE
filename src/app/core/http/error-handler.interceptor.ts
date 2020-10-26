import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {SnackBarService} from '../services';
import {CustomError} from '../../shared/types';
import {ServerError} from '../../shared/constants';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackBarService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler = (response: CustomError): Observable<HttpEvent<any>> => {
    if (response.error.message !== ServerError.INVALID_TOKEN) {
      this.snackBarService.showError(response.error.message);
    }
    throw response;
  }
}
