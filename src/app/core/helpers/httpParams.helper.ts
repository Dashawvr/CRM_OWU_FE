import {HttpParams} from '@angular/common/http';
// TODO types
export const createHttpParams = (params: any): HttpParams => {
  if (!params) {
    return;
  }
  let httpParams = new HttpParams();

  Object.keys(params).forEach(key => {
    httpParams = httpParams.append(key, params[key]);
  });

  return httpParams;
};
