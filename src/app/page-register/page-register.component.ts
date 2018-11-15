import { Component, OnInit } from '@angular/core';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {

  username: String
  password: String

  constructor(public provider_service: ProviderSupportService) { }

  ngOnInit() {
  }

  register_support(){
    this.provider_service.register_support(this.username, this.password).subscribe(response => {
      if (response.state) {
        alert("Se ha creado con exito")
      }else{
        alert(response.msg)
      }
    }, err => {
      console.log(err);
      alert("Error, favor intentarlo mas tarde");
    });
  }

}
