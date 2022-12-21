import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user_name:string="";

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
  ) {}

  ngOnInit(): void{
    this.authService.user().subscribe(user => {
      console.log(user);
      if(user.success){
        this.user_name = user.user.name;
      }
    })
  }


}
