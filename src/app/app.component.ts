import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_name: string = "";
  user_email: string = "";

  constructor(
    private loadingCrl: LoadingController,
    public authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private menu: MenuController
  ) {}


  async ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.authService.user().subscribe(user => {
        console.log(user);
        if (user.success) {
          this.user_name = user.user.name;
          this.user_email = user.user.email;
        }
      });
    }

  }


  async onLogout(){
    const loading = await this.loadingCrl.create({
      message: "Cerrando sesión...",
    });
    this.alertCtrl.create({
      header:"Cerrar sesión",
      message:"¿Estás seguro de que quieres cerrar la sesión?",
      buttons:[
        {
          text: "Cerrar sesión",
          handler: () => {
            this.authService.logout().subscribe({
              next: ()=>{

                loading.present();
                localStorage.removeItem('token');
                localStorage.removeItem('onboarding');
                this.menu.close('main-menu');
                window.location.reload();
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
