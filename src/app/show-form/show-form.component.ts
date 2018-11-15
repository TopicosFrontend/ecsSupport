import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service';
import FormData from '../../assets/form/data.json';


@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {
  ecn = ''
  cfn = ''
  data = FormData

  response_accepted = false
  response = {}

  constructor(public provider_support: ProviderSupportService, private router: Router) { }

  ngOnInit() {
  }

  show_form() {
    if (this.cfn != '' && this.ecn != '') {
      this.provider_support.show_form(this.cfn, this.ecn).subscribe(response => {
        if (!response["state"]) {
          this.response = response
          this.response_accepted = true
        } else {
          alert("Codigos invalidos")
        }
      });
    } else {
      alert("Copia los codigos ECN y CFN");
    }
  }

  lobby() {
    this.router.navigate(['lobby']);
  }
}
