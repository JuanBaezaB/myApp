import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
 export class AuthService{
    constructor(private http: HttpClient){}

    login(user: User){
        return this.http.post(environment.api_url+'/auth/login', user);
    }

    Register(user: User){
        return this.http.post(environment.api_url+'/auth/register', user);
    }

    logout(){
        return this.http.post(environment.api_url+'/auth/logout', {});
    }

    isLoggedIn(){
        const token = localStorage.getItem("token");
        return token;
    }
 }
