import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderAuthService } from '../../provider-services/provider-auth.service'

@Component({
  selector: 'app-header-ecs',
  templateUrl: './header-ecs.component.html',
  styleUrls: ['./header-ecs.component.css']
})
export class HeaderEcsComponent implements OnInit {

  constructor(public router: Router,
              public provider_auth_service: ProviderAuthService) { }

  ngOnInit() {
  }

  navigate_to_lobby(){
    this.router.navigate(['/lobby']);
  }

  logout(){
    this.provider_auth_service.logout().subscribe(response => {
      console.log(response);
      if (response.state) {
        this.router.navigate(['/login']);
        
      }else{
        alert("Error en el servidor, intente mas tarde")
      }
    }, err => {
      console.log(err);
      alert("Error, favor intentarlo mas tarde");
    });
  }
}
