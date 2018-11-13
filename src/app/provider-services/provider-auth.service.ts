import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderAuthService {

  server = "http://localhost:8000/support"

  constructor(public http: HttpClient) { }

  login(username, password){
    let req = {"user": username, "password": password};
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
       }),
      withCredentials: true
    };
    return this.http.post<any>(this.server + "/login/", req, httpOptions);
  }

  logout(){
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<any>(this.server + "/logout/", httpOptions);
  }
}
