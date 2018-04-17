// angular
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-forms-textarea',
  templateUrl: './forms-textarea.component.html',
  styleUrls: ['./forms-textarea.component.scss']
})
export class FormsTextareaComponent implements OnInit {

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
