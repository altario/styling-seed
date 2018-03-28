// angular
import { Component, TemplateRef } from '@angular/core';

// ngx-bootstrap
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

import { AlertModule } from 'ngx-bootstrap/alert';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  modalRef: BsModalRef;
  max = 10;
  rate = 7;
  isReadonly = false;

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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
      msg: `Warning!Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod.Lorem ipsum dolor sit amet, consectetur sed do eiusmod. Lorem ipsum dolor sit amet, consectetur sed do eiusmod.   `
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
  alerts = this.defaultAlerts;
  
  reset(): void {
    this.alerts = this.defaultAlerts;
  }

}
