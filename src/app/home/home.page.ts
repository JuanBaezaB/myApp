import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user_name: string = "";

  private grafico!: Chart;
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private menu: MenuController,
    private ref: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    this.authService.user().subscribe(user => {
      console.log(user);
      if (user.success) {
        this.user_name = user.user.name;
      }
    });
    this.ref.detectChanges();
    this.charts();
  }

  charts() {
    const ctx = document.getElementById("myChart")  as HTMLCanvasElement;
    this.grafico = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: '# litros de',
          data: [8, 10, 3, 5, 2, 3],
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
          borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
          borderWidth: 1,// Ancho del borde
          tension:0.1,
          fill:true
        }]
      },
      options: {
        responsive: true,
        plugins:{
          title:{
            color:"#3dc2ff",
            display: true,
            text: "20Lts",
            padding: {
              top: 30,
            },
            font: {
              size: 24,
            }

          },
          legend:{
            display:false
          }
        },
        scales: {
          y: {
            display:false,
            beginAtZero: true
          },
          x: {
            display:false,

          }
        }
      }
    });
  }


}
