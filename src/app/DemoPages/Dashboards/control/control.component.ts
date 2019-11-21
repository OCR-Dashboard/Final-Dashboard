import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {
  constructor() {
  
   }

   ngOnInit() {}
  playStatus = true;
  togglePlay(){
    this.playStatus = !this.playStatus;
  }

    // let btn = document.getElementById("toggleBtn");
    //   btn.addEventListener("click",function(event){		 
    //   event.preventDefault();
    //    if(event.target.parentElement.nodeName == "BUTTON"){
    //   if(play){
    //   event.target.parentElement.innerHTML = "<i class='fas fa-pause text-success'>";
    //   play = !play;
    //   }
    //   else{
    //     event.target.parentElement.innerHTML = "<i class='fas fa-play text-danger'>";
    //     play = !play;
    //   }
    //   }		 		 
    // })
  }
    

