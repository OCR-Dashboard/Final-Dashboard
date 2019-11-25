import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-esr',
  templateUrl: './esr.component.html',
  styleUrls: ['./esr.component.css']
})
export class ESRComponent implements OnInit {
  massPopChart1: any;
  totalbots:any;
  running:any;
  onhold:any;
  suspended:any;
  idle:any;
  issuse:any;
  array:any;
  array1:any;
  array2:any;
  array3:any;
  array4:any;
  BO:string='';
  PO:string='';
  TO:string='';
  CC:string='';
  sundaymin:any
  sundaymax:any
  mondaymax:any;
  tuesdaymax:any;
  wednesdaymax:any;
  thursdaymax:any;
  fridaymax:any;
  saturdaymax:any;
  mondaymin:any;
  tuesdaymin:any;
  wednesdaymin:any;
  thursdaymin:any;
  fridaymin:any;
  saturdaymin:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/bots/totalbots')
    .subscribe(
      res=>{
        console.log("hello");
       
        // this.array3=res.data
        // this.CC=this.array3.CC
        // console.log( this.array3);
        
        // console.log(this.CC)
        console.log(res.data)
        this.totalbots=res.data;
        this.running= this.totalbots.running
        this.onhold= this.totalbots.onhold
        this.suspended= this.totalbots.suspended
        this.idle= this.totalbots.idle
        this.issuse= this.totalbots.issuse
        console.log(  this.totalbots.running)
      }
    )

    this.massPopChart1 = new Chart('doughnutChart', {
      type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea 
      data:{  
        labels: ['Running','On Hold','Suspended','Idle','Issue'],    
      datasets:[{      
        data: [88,15,30,21,39],
      //backgroundColor:'green',
      backgroundColor:[
        '#f7464a',
        '#46bfbd',
       '#fdb45c',
      '#939eb0',
       '#4d5360'
      ],
      borderWidth:1,
      borderColor:'#fff',
      hoverBorderWidth:5,
      hoverBorderColor:'#fff'
      }]
      },
      options:{
      title:{
      display:false,
      text:'',
      fontSize:0
      },
    
      legend:{
      display:false,
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
  

    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/esrc/esrbo')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array=res.data
        this.BO=this.array.BO
        console.log( this.array);
        
        console.log(this.BO)
      }
    )
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/esrc/esrpo')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array1=res.data
        this.PO=this.array1.PO
        console.log( this.array1);
        
        console.log(this.PO)
      }
    )
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/esrc/esrto')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array2=res.data
        this.TO=this.array2.TO
        console.log( this.array2);
        
        console.log(this.TO)
      }
    )
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/esrc/esrcc')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array3=res.data
        this.CC=this.array3.CC
        console.log( this.array3);
        
        console.log(this.CC)
      }
    )
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/mesc/mesc')
    .subscribe(
      res=>{
        console.log("hello11");
       
        this.array3=res.data
        console.log( this.array3)

        
        
        this.sundaymin=this.array3[0].sunday.min;
        this.mondaymin=this.array3[0].mondaymin;
        this.tuesdaymin=this.array3[0].tuesdaymin;
        this.wednesdaymin=this.array3[0].wednesdaymin;
        this.thursdaymin=this.array3[0].thursdaymin;
        this.fridaymin=this.array3[0].fridaymin;
        this.saturdaymin=this.array3[0].saturdamin;
        this.sundaymax=this.array3[0].sunday.max;
        this.mondaymax=this.array3[0].mondaymax;
        this.tuesdaymax=this.array3[0].tuesdaymax;
        this.wednesdaymax=this.array3[0].wednesdaymax;
        this.thursdaymax=this.array3[0].thursdaymax;
        this.fridaymax=this.array3[0].fridaymax;
        this.saturdaymax=this.array3[0].saturdaymax;
        console.log(   this.sundaymin+"sunday");

        
        console.log(this.CC)
      }
    )
   
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
    baroptions: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  }


  LineData = {  
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
        data: [
         
          //this.sundaymin,
          // this.mondaymin,
          // this.tuesdaymin,
          // this.wednesdaymin,
        
          // this.thursdaymin,
          // this.fridaymin,
          // this.saturdaymin,
          11,42,12,43,34,36
      
         

        ],
      },
      {
        label: 'Weakly Summary',
        backgroundColor: [
         '#abd7f4'       
        ],
        borderColor: [
           '#36a2eb',         
        ],
        borderWidth: 2,       
        data: [
           //this.sunday.max,
          // this.monday.max,
          // this.tuesday.max,
          // this.wednesday.max,
          // this.thursday.max,
          // this.friday.max,
          // this.saturday.max,
          38,33,55,12,44,22,25
        ],
      },
    ],  
    
  }
  


}






