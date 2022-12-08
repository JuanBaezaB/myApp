import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user_name:string="";
  constructor(private authServise: AuthService) { }

  ngOnInit(): void {
    this.authServise.user().subscribe(user => {
      console.log(user);
      if(user.success){
        this.user_name = user.user.name;
      }
    })
  }

}
