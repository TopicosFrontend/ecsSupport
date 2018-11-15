import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-show-collector',
  templateUrl: './show-collector.component.html',
  styleUrls: ['./show-collector.component.css']
})
export class ShowCollectorComponent implements OnInit {
  collector = {}

  constructor(private activeRoute: ActivatedRoute, private router: Router, private provider_support: ProviderSupportService) { }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.provider_support.show_collector(routeParams.username).subscribe(response => {
      this.collector = response.collector
      console.log(response);
    });
  }

  show_collectors() {
    this.router.navigate(['show_collectors']);
  }

}
