import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor() { }

  isAuth = localStorage.getItem("token") ? true : false;
  subject = new BehaviorSubject(this.isAuth);

  private readonly _http = inject(HttpClient); //_HTTP naming convenction

  login(body: any) {
    return this._http.post(`${enviroment.basepath}auth/login`, body);
  }

  register(body: any) {
    return this._http.post(`${enviroment.basepath}auth/register`, body);
  }

  ngOnInit(): void {
  }

}