import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) { }

    public login(user: User) {
        return this.http.post(environment.api_url + '/auth/login', user);
    }

    public Register(user: User) {
        return this.http.post(environment.api_url + '/auth/register', user);
    }

    public logout() {
        return this.http.get(environment.api_url + '/auth/logout', {});
    }

    public isLoggedIn() {
        const token = localStorage.getItem("token");
        return token;
    }

    public user(): Observable<any> {
        return this.http.get(environment.api_url + '/auth/user', {});
    }
}
