import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

 



// export interface PeriodicElement {
//   position: number; 
//   symbol: string;
// }
// const ELEMENT_DATA= [
//   {position: 1, symbol: 'H'},
//   {position: 2, symbol: 'He'},
//   {position: 3,  symbol: 'Li'},
  
// ];

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
 
 
  constructor() { }
  ngOnInit() { }
  Data1 = {  
    labels: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
    datasets: [
      {
        label: '',
        backgroundColor: [
         'rgba(120, 111, 166,0.5)'       
        ],
        borderColor: [
           'rgba(87, 75, 144,1.0)',         
        ],
        borderWidth: 1,       
        data: [12,39,45,80,25,15,12],
      },
    ],
    Options: {     
      scales: {
        yAxes: [
          {
            gridLines: {
                  lineWidth: 0
              }
          }
        ]
      }     
    }
  }


  Data2= {  
    labels: ['Bae Ajel', 'SAMA', 'Shortage', 'ES', 'OPS'],
    datasets: [
      {
        labels: ['Bae Ajel', 'SAMA', 'Shortage', 'ES', 'OPS'],            
        backgroundColor: [
          'rgba(116, 185, 255,1.0)',
          'rgba(162, 155, 254,1.0)',
          'rgba(0, 184, 148,1.0)',
          'rgba(253, 203, 110,1.0)',
          'rgba(225, 112, 85,1.0)',

        ],
        borderWidth: 1,
        data: [23,35,45,58,35],
      },
    ],
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  }
Data = {  
  labels: ['P1', 'P2', 'P3','P4'],
  datasets: [
    {
      label: '',
      backgroundColor: [
        'rgba(162, 155, 254,1.0)',
          'rgba(0, 184, 148,1.0)',
          'rgba(253, 203, 110,1.0)',
          'rgba(225, 112, 85,1.0)',
      ],
     
      borderWidth: 1,
      data: [65, 59, 80,40],
    },
  ],
}
}

 
