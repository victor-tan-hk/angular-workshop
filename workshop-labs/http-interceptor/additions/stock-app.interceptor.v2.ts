import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class StockAppInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (this.authService.authToken) {
            const authReq = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    this.authService.authToken
                )
            });
            console.log('Making an authorized request');
            req = authReq;
        }
        return next.handle(req).pipe(tap(
            event => this.handleResponse(req, event),
            error => this.handleError(req, error)
            ));
    }
    handleResponse(req: HttpRequest<any>, event) {
        if (event instanceof HttpResponse) {
            console.log('Incoming Response for ', req.url,
                '\n Response Status ', event.status,
                '\n With body ', event.body);
        }
    }

    handleError(req: HttpRequest<any>, event) {
        console.error('Error reported for : ', req.url,
            '\n Response Status ', event.status,
            '\n With error ', event.error);
    }
}
