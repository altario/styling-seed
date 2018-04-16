// angular
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-forms-checkbox-radio-toggle',
  templateUrl: './forms-checkbox-radio-toggle.component.html',
  styleUrls: ['./forms-checkbox-radio-toggle.component.scss']
})
export class FormsCheckboxRadioToggleComponent implements OnInit {

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
