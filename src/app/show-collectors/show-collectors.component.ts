import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-show-collectors',
  templateUrl: './show-collectors.component.html',
  styleUrls: ['./show-collectors.component.css']
})
export class ShowCollectorsComponent implements OnInit {
  data = {
    'collectors': [
      { 'nombre': "Esteban", 'telefono': "123123213", 'usuario': "esilvac" },
      { 'nombre': "S", 'telefono': "123123213", 'usuario': "esilvac2" },
      { 'nombre': "Valentaina Duque", 'telefono': "123123213", 'usuario': "esivlac23" }
    ]
  }

  collectors = []

  constructor(private router: Router, private provider_support: ProviderSupportService) { }

  ngOnInit() {
    this.provider_support.show_collectors().subscribe(response => {
      // this.collectors = response.collectors
      alert(response);
    });
    this.collectors = this.data["collectors"]
  }

  show_collector(username) {
    this.router.navigate(['show_collector', username]);
  }

  lobby() {
    this.router.navigate(['lobby']);
  }
}
