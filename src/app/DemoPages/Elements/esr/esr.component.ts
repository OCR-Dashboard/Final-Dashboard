import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esr',
  templateUrl: './esr.component.html',
  styleUrls: ['./esr.component.css']
})
export class ESRComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  piedata= {  
    labels: ['P1', 'P2', 'P3'],
    datasets: [
      {
        label: '',
        backgroundColor: [
          '#f7464a',
            '#46bfbd',
            '#fdb45c',            
        ],
       
        borderWidth: 1,
        data: [95, 59, 80],
      },
    ],
  }


  bardata2= {  
    labels: ['Bae Ajel', 'SAMA', 'Shortage', 'ES', 'OPS'],
    datasets: [
      {
        labels: ['Bae Ajel', 'SAMA', 'Shortage', 'ES', 'OPS'],            
        backgroundColor: [
          '#5abf62',
          '#f98929',
          '#f73e37',
          '#3b54eb',
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


  Data1 = {  
    labels: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
    datasets: [
      {
        label: 'Monthly Summary',
        backgroundColor: [
         '#fcbdcb'       
        ],
        borderColor: [
           '#ff6384',         
        ],
        borderWidth: 2,       
        data: [12,39,45,80,25,15,12],
      },
      {
        label: 'Monthly Summary',
        backgroundColor: [
         '#abd7f4'       
        ],
        borderColor: [
           '#36a2eb',         
        ],
        borderWidth: 2,       
        data: [45,67,24,15,36,59,24],
      },
    ],  
    
  }
  Data2= {  
    datasets: [
      {
        label: '',
        backgroundColor: [
          '#f7464a',
            '#46bfbd',
            '#fdb45c',
            '#939eb0',
            '#4d5360'
        ],
       
        borderWidth: 1,
        data: [88,15,30,21,39],
      },
    ],
  }
 
}






