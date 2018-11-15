import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderSupportService {
  server = "http://localhost:8000/support";

  constructor(public http: HttpClient) { }

  register_collectors(file) {
    const fd = new FormData();
    const httpOptions = {
      withCredentials: true
    };

    fd.append('file', file, file.name)
    return this.http.post<any>(this.server + "/register_collectors/", fd, httpOptions);
  }

  show_form(cfn, ecn) {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<any>(this.server + "/show_form/?cfn=" + cfn + "&ecn=" + ecn, httpOptions);
  }

  show_collector(username) {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<any>(this.server + "/show_collector/?username=" + username, httpOptions);
  }

  show_collectors() {
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get<any>(this.server + "/show_collectors/", httpOptions);
  }

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
