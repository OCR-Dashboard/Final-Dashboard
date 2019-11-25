import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private _router: Router) { }

    register(registerdata){
      const headers=new HttpHeaders()

       return this.http.post<{sucess: boolean, msg: string, data: {}}>("http://localhost:4000/admin/adduser",registerdata,
       {headers:headers})
    }
    Accesscontrol(accessdata){
      const headers=new HttpHeaders()
       return this.http.post<{sucess: boolean, msg: string, data: {}}>("http://localhost:4000/access/resumeorpausequeue",accessdata,
       {headers:headers})
    }
}
