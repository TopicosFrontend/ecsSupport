import { Component, OnInit } from '@angular/core';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-page-transfer-form',
  templateUrl: './page-transfer-form.component.html',
  styleUrls: ['./page-transfer-form.component.css']
})
export class PageTransferFormComponent implements OnInit {

  username: String
  password: String

  constructor(public provider_support: ProviderSupportService) { }

  ngOnInit() {
  }

  transfer_forms(){
    this.provider_support.transfer_forms(this.username, this.password).subscribe(response => {
      console.log(response)
    }, err => {
      alert("Error al intentar conectarse con el servidor, intente mas tarde");
    })
  }
}
