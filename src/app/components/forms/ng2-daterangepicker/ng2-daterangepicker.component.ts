// angular
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ng2-daterangepicker',
  templateUrl: './ng2-daterangepicker.component.html',
  styleUrls: ['./ng2-daterangepicker.component.scss']
})
export class Ng2DaterangepickerComponent implements OnInit {

  singleDate: any;
  singlePickerOptions = {
    locale: { format: 'DD MMM' },
    singleDatePicker: true,
    showDropdowns: true,
    // opens: 'left',
  };

  daterange: any = {};
  datePickerOptions: any = {
    // locale: { format: '   DD MMM                ' },
    locale: { format: 'DD MMM' },
    alwaysShowCalendars: false,
    showDropdowns: true,
  };

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

  // Select: Single
  singleSelect(value: any) {
    this.singlePickerOptions = value.start;
  }

  // Select: Range
  selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

}
