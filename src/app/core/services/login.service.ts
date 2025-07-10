import { Injectable } from '@angular/core';
import { environment } from '../../env/env';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urllogin = `${environment.baseUrl}auth/login`;
  constructor(private hhtp:HttpClient) { }
  login(data:any):Observable<any>{

    return this.hhtp.post(this.urllogin,data);

  }


}
