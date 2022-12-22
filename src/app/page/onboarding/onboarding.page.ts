import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  Slides: any [] = []

  constructor(
    private router: Router,
    private menu: MenuController
  ) { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,

  };

  ngOnInit() {
    this.Slides = [
      {

        title: '',
        text: '',
        img: '1.png',
        imgBottom: true,
      },
      {
        title: '',
        text: '',
        img: '2.png',
        imgBottom: true,
      },
      {
        title: '',
        text: '',
        img: '3.png'
      },
    ]
  }

  navigate(slide: any, index: any) {
    slide.slideTo(index)
  }

  skip(slide: any, index: any){
    slide.slideTo(index)
  }

  async start() {
    localStorage.setItem('onboarding', 'true');
    this.router.navigateByUrl('/login');
  }

}
