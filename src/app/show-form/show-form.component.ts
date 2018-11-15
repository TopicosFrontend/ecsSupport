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
  res = {
    "codigo": {"cfn": "2-1", "ecn": "Q"},
    "secciones": [
      {
          "preguntas": [{ "respuesta": "answ 1" }, { "respuesta": "answ 2" }]
      },
      {
          "preguntas": [{ "respuesta": "answ 3" }, { "respuesta": "answ 4" }, { "respuesta": "answ 5" }]
      },
      {
          "preguntas": [{ "respuesta": "answ 6" }, { "respuesta": "answ 7" }]
      },
      {
          "preguntas": [{ "respuesta": "answ 8" }, { "respuesta": "answ 9" }, { "respuesta": "answ 10" }, { "respuesta": "answ 11" }]
      },
      {
          "preguntas": [{ "respuesta": "answ 12" }, { "respuesta": "answ 13" }, { "respuesta": "answ 14" }]
      },
      {
          "preguntas": [{ "respuesta": "answ 15" }, { "respuesta": "answ 16" }, { "respuesta": "answ 17" }]
      },
      {
          "preguntas": [{ "respuesta": "answ 18" }, { "respuesta": "answ 19" }, { "respuesta": "answ 20" }]
      }
    ]
  }

  constructor(public provider_support: ProviderSupportService, private router: Router) { }

  ngOnInit() {
  }

  show_form() {
    if (this.cfn != '' && this.ecn != '') {
      this.provider_support.show_form(this.ecn, this.cfn).subscribe(response => {
        this.response = response.form
        this.response = this.res
        this.response_accepted = true
      });
    } else {
      alert("Copia los codigos ECN y CFN");
    }
  }

  lobby() {
    this.router.navigate(['lobby']);
  }
}
