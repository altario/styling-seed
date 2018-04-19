// angular
import { Component, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// ngx-bootstrap
import { AlertModule } from 'ngx-bootstrap/alert';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'warning',
      msg: `Warning! Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod. Lorem ipsum dolor sit amet, consectetur sed do eiusmod.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  alerts = this.defaultAlerts;

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

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  ngOnInit() {
  }

}
