import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  Slides: any [] = []

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,

  };

  ngOnInit() {
    this.Slides = [
      {
        title: 'Start to invest for your future!',
        text: 'Ex totam praesentium incidunt aut.',
        img: 'step-1.svg'
      },
      {
        title: 'Follow our tips to achieve success!',
        text: 'Ex totam praesentium incidunt aut.',
        img: 'step-2.svg',
        imgBottom: true,
      },
      {
        title: 'Keep your investment safe',
        text: 'Ex totam praesentium incidunt aut.',
        img: 'step-3.svg'
      },
    ]
  }


  navigate(slide: any, index: any) {
    slide.slideTo(index)
  }

  skip(slide: any, index: any){
    slide.slideTo(index)
  }

  start(){
    alert("Start")
  }

}
