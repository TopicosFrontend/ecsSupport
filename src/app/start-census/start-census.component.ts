import { Component, OnInit } from '@angular/core';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-start-census',
  templateUrl: './start-census.component.html',
  styleUrls: ['./start-census.component.css']
})
export class StartCensusComponent implements OnInit {
  user: String
  password: String

  constructor(public provider_support: ProviderSupportService) { }

  ngOnInit() {
  }

  startCensus(){
    this.provider_support.start_census_nigth(this.user, this.password).subscribe(response => {
      alert(response.msg);
    })
  }
}
