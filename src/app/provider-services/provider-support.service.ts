import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderSupportService {
  server = "http://localhost:8000/support";

  constructor(public http: HttpClient) { }

  get_census_status(){
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<any>(this.server + "/census_status/", httpOptions);
  }

  start_census_nigth(user, password){
    let req = {
      user: user,
      password: password
    }
    const httpOptions = {
      withCredentials: true
    };
    return this.http.post<any>(this.server + "/start_census_night/", req, httpOptions);
  }
}
