import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { HttpClient ,HttpParams} from '@angular/common/http';

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
  arraydata:any;
  @ViewChild('myId') myId: ElementRef;
  @ViewChild('myId1') myId1: ElementRef;
  @ViewChild('myId2') myId2: ElementRef;
   
  autoLeasing: any = [];
  watani2: any = []
  mrcc: any = []
  array:any;
  array1:any;
  array2:any;
  constructor(private http:HttpClient){ }

  ngOnInit() { 
    //infinite Scroll

    var container =  this.myId.nativeElement
    var container1 =  this.myId1.nativeElement
    var container2 =  this.myId2.nativeElement

    //credit analysis 
   container.addEventListener('scroll',function(e){
     var containerHeight = container.offsetHeight;
	 	
     var value=container.scrollTop - containerHeight
     console.log(container.scrollTop,container.offsetHeight,container.scrollHeight); 
     if(container.scrollTop >= (container.scrollHeight - container.offsetHeight)){
	  	container.scrollTop =0;

	 	}
})
//sama general file
container1.addEventListener('scroll',function(e){
  var container1Height = container1.offsetHeight;
  
  var value1=container1.scrollTop - container1Height
  console.log(container1.scrollTop,container1.offsetHeight,container1.scrollHeight); 
  if(container1.scrollTop >= (container1.scrollHeight - container1.offsetHeight)){
   container1.scrollTop =0;

  }
})

//sama legal file
container2.addEventListener('scroll',function(e){
  var container2Height = container2.offsetHeight;  
  var value2=container2.scrollTop - container2Height
  console.log(container2.scrollTop,container2.offsetHeight,container2.scrollHeight); 
  if(container2.scrollTop >= (container2.scrollHeight - container2.offsetHeight)){
   container2.scrollTop =0;

  }
})



    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/po/getvolumereport')
    .subscribe(
      res=>{
        //console.log('response===> ', res.msg);
        
        this.arraydata=res
        console.log(res)
        this.autoLeasing=this.arraydata.data.autoLeasing
        this.watani2=this.arraydata.data.watani2
        this.mrcc=this.arraydata.data.mrcc

    this.massPopChart1 = new Chart('myChart1', {
      type:'pie', 
      data:{  
    labels:['Approved','Rejected','Reassigned'],    
      datasets:[{
       label:'Approved',
      data:[
        this.autoLeasing.approved,
        this.autoLeasing.rejected,
        this.autoLeasing.reassigned
      ],
      backgroundColor:[
        '#54cd98',
        '#fca702',
        '#44a5e7'
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

    this.massPopChart2 = new Chart('myChart2', {
      type:'pie',
      data:{  
      labels:['Approved','Rejected','Reassigned'] ,
      datasets:[{
      data:[
        this.watani2.approved,
        this.watani2.rejected,
        this.watani2.reassigned

        
      ],
      backgroundColor:[
        '#54cd98',
        '#fca702',
        '#44a5e7'
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
    this.massPopChart3 = new Chart('myChart3', {
      type:'pie', 
      data:{
        labels:['Approved','Rejected','Reassigned'],
      datasets:[{
      data:[
        this.mrcc.approved,

        this.mrcc.rejected,
        this.mrcc.reassigned
      ],
      backgroundColor:[
        '#54cd98',
        '#fca702',
        '#44a5e7'       
      
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
      },      
    });
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/cc/getmsdvolumereport')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array=res.data
        console.log( this.array);
      }
    )
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/bo/samareports')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array1=res.data
        console.log( this.array1);
      }
    )
    this.http.get<{sucess: boolean, msg: string, data: {}}>('http://localhost:4000/to/gettardeeports')
    .subscribe(
      res=>{
        console.log("hello");
       
        this.array2=res.data
        console.log( this.array2);
      }
    )
  })


  }

}
