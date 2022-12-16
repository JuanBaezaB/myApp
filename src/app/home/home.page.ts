import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public onboardSliders: any[] = []

  constructor() {}

  ngOnInit(){
    this.onboardSliders = [
      {
        title:'play the beat',
        img: 'slide_1',
        desc: 'Most beginner producer learn creating by simple beats.',
      },
      {
        title:'live the life',
        img: 'slide_2',
        desc: 'In our daily lives, we often rush tasks trying to get then finish.',
      },
      {
        title:'capture the moment',
        img: 'slide_3',
        desc: 'You are not alone. You have unique ability to go to another world.',
      },

    ];
  }

  public goBack(){

  }
  public skipBtn(){

  }
  public goNext(){

  }

}
