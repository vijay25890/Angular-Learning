import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  users: any;
  constructor(private data: ServiceService) {
    console.log('data', data);
    this.users = data.users();
  }

  ngOnInit() {}
}
