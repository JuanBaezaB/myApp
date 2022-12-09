import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
 export class AuthService{
    constructor(private http: HttpClient){}

 }
