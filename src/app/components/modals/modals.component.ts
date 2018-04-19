// angular
import { Component, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// ngx-bootstrap
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;

  constructor(router: Router, private modalService: BsModalService) {
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

  // Modal
  openModal(template: TemplateRef<any>, cls: '') {
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: cls })
    );
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Canceled!';
    this.modalRef.hide();
  }

  ngOnInit() {
  }

}
