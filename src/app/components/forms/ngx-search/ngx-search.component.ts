// angular
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngx-search',
  templateUrl: './ngx-search.component.html',
  styleUrls: ['./ngx-search.component.scss']
})
export class NgxSearchComponent implements OnInit {

  selectControl = new FormControl();

  ngxSelectItems = [
    'When is Thanksgiving',
    'When I grow up',
    'When It Rains It Pours',
    'When Time Go Back',
    'When She Loved Me',
  ];

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
  }

  ngOnInit() {
  }

}
