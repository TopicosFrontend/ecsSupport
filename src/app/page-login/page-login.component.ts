import { Component, OnInit } from '@angular/core';
import { ProviderAuthService } from '../provider-services/provider-auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  name: String = ''
  password: String = ''
  constructor(public provider_auth_service: ProviderAuthService,
              public router: Router) { }

  ngOnInit() {
  }

  login(){
    this.provider_auth_service.login(this.name, this.password).subscribe( (response: HttpResponse<any>) => {
      console.log(response);
      if (response["state"]) {
          this.router.navigate(['/lobby']);
      }else{
        alert("Copiaste mal tus credenciasles")
      }
    }, err => {
      console.log(err);
      alert("Error, favor intentarlo mas tarde");
    });
  }
}
