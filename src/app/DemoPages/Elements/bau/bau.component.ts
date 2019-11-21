import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bau',
  templateUrl: './bau.component.html',
  styleUrls: ['./bau.component.css']
})
export class BAUComponent implements OnInit {
  massPopChart: any;
  name: any;
  massPopChart2: any;
  massPopChart3: any;
  massPopChart1: any;
  constructor() { }

  ngOnInit() {

    this.massPopChart1 = new Chart('myChart1', {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea 
      data:{  
    //  labels:['Approved'],    
      datasets:[{
      // label:'Approved',
      data:[
      60,
      20,
      20,
      ],
      //backgroundColor:'green',
      backgroundColor:[
        '#72a638',
        '#dd5600',
        '#2fa4e7'
      ],
      borderWidth:1,
      borderColor:'#fff',
      hoverBorderWidth:5,
      hoverBorderColor:'#fff'
      }]
      },
      options:{
      title:{
      display:true,
      text:'',
      fontSize:0
      },
      legend:{
      display:true,
      position:'top',
      labels:{
      fontColor:'#000'
      }
      },
      layout:{
      padding:{
      left:0,
      right:0,
      bottom:0,
      top:0
      }
      },
      tooltips:{
      enabled:true
      }
      }
    });

    this.massPopChart2 = new Chart('myChart2', {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{  
      // labels:['Rejected'],    
      datasets:[{
      // label:'Rejected',
      data:[
      20,
      60,
      20,
      ],
      //backgroundColor:'green',
      backgroundColor:[
        '#72a638',
        '#dd5600',
        '#2fa4e7'
      ],
      borderWidth:1,
      borderColor:'#fff',
      hoverBorderWidth:5,
      hoverBorderColor:'#fff'
      }]
      },
      options:{
      title:{
      display:true,
      text:'',
      fontSize:0
      },
      legend:{
      display:true,
      position:'top',
      labels:{
      fontColor:'#000'
      }
      },
      layout:{
      padding:{
      left:0,
      right:0,
      bottom:0,
      top:0
      }
      },
      tooltips:{
        enabled:true
      }
      }
    });
    this.massPopChart3 = new Chart('myChart3', {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
      // labels:['Reassigned'],
      datasets:[{
        // label:'Reassigned',
      data:[
      20,
      20,
      60,
      ],
      //backgroundColor:'green',
      backgroundColor:[
        '#72a638',
        '#dd5600',
        '#2fa4e7'       
      
      ],
      borderWidth:1,
      borderColor:'#fff',
      hoverBorderWidth:5,
      hoverBorderColor:'#fff'
      }]
      },
      options:{
      title:{
      display:true,
      text:'',
      fontSize:0
      },
      legend:{
      display:true,
      position:'top',
      labels:{
      fontColor:'#000'
      }
      },
      layout:{
      padding:{
      left:0,
      right:0,
      bottom:0,
      top:0
      }
      },
      tooltips:{
      enabled:true
      }
      }
    });


  }

}
