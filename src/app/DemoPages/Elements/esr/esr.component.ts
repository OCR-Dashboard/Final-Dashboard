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



