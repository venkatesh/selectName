import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {
baseURL:"https://reqres.in/api/users"
  constructor(private _http:HttpClient) { }

  postData(reqBody){
   return this._http.post(this.baseURL, reqBody)
  }
}
