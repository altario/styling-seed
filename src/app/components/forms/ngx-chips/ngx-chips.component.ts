import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-chips',
  templateUrl: './ngx-chips.component.html',
  styleUrls: ['./ngx-chips.component.scss']
})
export class NgxChipsComponent implements OnInit {

  items = ['Pizza', 'Pasta', 'Parmesan'];

  constructor() { }

  ngOnInit() {
  }

}
