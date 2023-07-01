import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../service/loader.service';
import { delay } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  constructor(public loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      delay(2000),
      finalize(() => {
        this.loader.hide();
      }));
  }
}
