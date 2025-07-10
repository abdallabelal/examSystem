import { Injectable } from '@angular/core';
import { environment } from '../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  urlRegister = `${environment.baseUrl}auth/register`;
  constructor(private hhtp:HttpClient) { }
  login(data:any):Observable<any>{

    return this.hhtp.post(this.urlRegister,data);

  }

}
