import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // @ts-ignore
  form: FormGroup

  constructor(
    private loadingCrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  async onLogin() {
    const loading = await this.loadingCrl.create({
      message: "Please wait ...",
    });
    loading.present();

    this.authService.login(this.form.value).subscribe({
      next: (response: any) => {
        if (response.success) {
          console.log(response);
          loading.dismiss();
          this.form.reset();
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', response.user);
          this.router.navigateByUrl('/home');
        }

      },
      error: (error) => {
        loading.dismiss();
        console.log(error.error);
      }
    });
  }

}
