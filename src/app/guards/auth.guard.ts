import { Injectable } from "@angular/core";
import { CanActivate, Router} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor (
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(): boolean {
        if(this.authService.isLoggedIn()){
            return true;
        }
        if (!localStorage.getItem("onboarding")){
            console.log("hola")
            this.router.navigateByUrl('/onboarding');
        }else{
            this.router.navigateByUrl('/login');
        }

        return false;
    }


}
