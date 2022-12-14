
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    public constructor() { }

    intercept(
        request: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("token");
        
        if (token) {
            console.log(token);
            request = request.clone({
                setHeaders: {
                    "Accept": "application/json",
                    "Authorization": "Bearer "+token,
                    "Content-Type": "application/json"
                },
            });
        }
        return next.handle(request)
    }

}
