import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  public constructor(
    private cookieService: CookieService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get("token");
    if (token) {
      req = req.clone({
        setHeaders: {
          "Accept": "application/json",
          "Authorization": "Bearer "+token,
          "Content-Type": "application/json"
        }
      })
    }
    return next.handle(req)
  }

}
