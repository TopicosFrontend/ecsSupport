import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service'

@Component({
  selector: 'app-page-lobby',
  templateUrl: './page-lobby.component.html',
  styleUrls: ['./page-lobby.component.css']
})
export class PageLobbyComponent implements OnInit {

  constructor(public router: Router,
              public provider_support: ProviderSupportService) {
    
  }

  ngOnInit() {
    
  }

  ngAfterViewChecked(){

  }

  register_support(){
    this.router.navigate(['/registerSupport']);
  }

  get_census_status(){
    this.provider_support.get_census_status().subscribe(response => {
      let msg = "Total de censos = "+response.total + " | Completados = "+response.completed
      alert(msg);
    }, error => {
      console.log(error);
      alert("Sucedio un error, intente más tarde");
    })
  }

  start_census_nigth(){
    this.router.navigate(['startCensus']);
  }

  
}
