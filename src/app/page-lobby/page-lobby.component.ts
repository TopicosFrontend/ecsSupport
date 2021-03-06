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

  start_census(){
    this.provider_support.start_census().subscribe(response => {
      alert(response.msg)
    }, error => {
      alert("Error al intentar conectarse con el servidor");
      console.log(error);
      
    })
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

  show_collectors(){
    this.router.navigate(['show_collectors']);
  }

  show_form(){
    this.router.navigate(['show_form']);
  }

  register_collectors() {
    this.router.navigate(['register_collectors']);
  }

  transfer_forms(){
    this.router.navigate(['transfer_form']);
  }
}
