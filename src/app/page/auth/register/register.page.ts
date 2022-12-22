import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // @ts-ignore
  form: FormGroup

  constructor(
    private loadingCrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private menu: MenuController
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }

  async onRegister(){
    const loading = await this.loadingCrl.create({
      message:"Please wait ...",
    });
    loading.present();

    this.authService.Register(this.form.value).subscribe({
      next: () => {
        loading.dismiss();
        this.form.reset();
        this.router.navigateByUrl('/login');
      },
      error: (error)=>{
        loading.dismiss();
        console.error();
      }
    });
  }

}
