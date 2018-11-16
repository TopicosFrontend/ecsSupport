import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import FormData from '../../assets/form/data.json';
import * as $ from 'jquery';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})

export class ShowFormComponent implements OnInit {
  data = FormData

  cfn = ''
  ecn = ''
  response = {}
  response_accepted = false

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  constructor(public provider_support: ProviderSupportService, private router: Router) { }

  ngOnInit() {
  }

  show_form() {
    if (this.cfn != '' && this.ecn != '') {
      this.provider_support.show_form(this.cfn, this.ecn).subscribe(response => {
        console.log(response)
        if (response["state"]) {
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

  toggle_subject(id) {
    $("#section-" + id).toggle();
    $("#section-info-" + id + " .arrow-up").toggle();
    $("#section-info-" + id + " .arrow-down").toggle();
  }

  lobby() {
    this.router.navigate(['lobby']);
  }
}
