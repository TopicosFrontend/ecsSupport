import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-show-collectors',
  templateUrl: './show-collectors.component.html',
  styleUrls: ['./show-collectors.component.css']
})
export class ShowCollectorsComponent implements OnInit {
  collectors = []

  constructor(private router: Router, private provider_support: ProviderSupportService) { }

  ngOnInit() {
    this.provider_support.show_collectors().subscribe(response => {
      console.log(response)
      this.collectors = response.collectors
    });
  }

  show_collector(username) {
    this.router.navigate(['show_collector', username]);
  }

  lobby() {
    this.router.navigate(['lobby']);
  }
}
