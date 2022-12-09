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

  constructor(
    private authService:AuthService,
    private alertCtrl: AlertController,
    private router:Router
  ) {}
  ngOnInit(): void{}

  onLogout(){
    this.alertCtrl.create({
      header:"Logout",
      message:"Are you sure want to leave?",
      buttons:[
        {text: "Stay"},
        {
          text: "Leave",
          handler:()=>{
            this.authService.logout().subscribe({
              next: ()=>{
                localStorage.removeItem('token');
                this.router.navigateByUrl('/login');
              }
            })
          }
        }
      ]
    })
  }
}
