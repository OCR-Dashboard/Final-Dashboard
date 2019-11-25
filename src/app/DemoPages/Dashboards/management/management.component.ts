import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import{AuthService} from '../../../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  registerData={

  }
  arrayData: any = []
  message:string=''
  msg:string='Success'
  constructor( private auth:AuthService,private _httpclient:HttpClient) { }

  ngOnInit() {
  }
  registeruser(){
    console.log(this.registerData);
    this.auth.register(this.registerData)
    .subscribe(
      res => {
        console.log('res===> ', res);
        
        this.arrayData = res;
        console.log('response===> ', this.arrayData);
        this.message=this.arrayData.msg
          
        console.log(this.message);
        console.log(this.msg);

        if(this.message==this.msg)
        {
          alert("Registration Successfull")
        }
        else{
          alert("User already registered with portal")
        }

        
      }     
    )
  }

}
