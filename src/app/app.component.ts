import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private menu: MenuController
  ) {}

  onLogout(){
    this.alertCtrl.create({
      header:"Cerrar sesión",
      message:"¿Estás seguro de que quieres cerrar la sesión?",
      buttons:[
        {
          text: "Cerrar sesión",
          handler: () => {
            this.authService.logout().subscribe({
              next: ()=>{
                localStorage.removeItem('token');

                this.menu.close('main-menu');
                this.router.navigateByUrl('/login');
              },
              error: (error) => {
                console.log(error);
              },
            });
          },
        },
        {
          text: "Quedarme"
        },
      ],
    }).then((alert)=> alert.present())
  }
}
