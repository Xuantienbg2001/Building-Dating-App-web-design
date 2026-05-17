import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message =
        typeof error.error === 'string'
          ? error.error
          : error.error?.title ?? error.message ?? 'Request failed';
      return throwError(() => message);
    })
  );
};
