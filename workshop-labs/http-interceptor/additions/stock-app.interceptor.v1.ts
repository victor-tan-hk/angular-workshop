import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class StockAppInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        console.log('Making a request to ', req.url);
        return next.handle(req);
    }
}
