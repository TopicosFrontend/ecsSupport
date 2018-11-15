import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderSupportService } from '../provider-services/provider-support.service';

@Component({
  selector: 'app-register-collectors',
  templateUrl: './register-collectors.component.html',
  styleUrls: ['./register-collectors.component.css']
})
export class RegisterCollectorsComponent implements OnInit {
  file: File = null

  constructor(private router: Router, private provider_support: ProviderSupportService) { }

  ngOnInit() {
  }

  onFileUpload(e) {
    this.file = <File>e.target.files[0]
  }

  send_data() {
    this.provider_support.register_collectors(this.file).subscribe(response => {
      alert(response.msg);
    });
  }

  lobby() {
    this.router.navigate(['lobby']);
  }
}
