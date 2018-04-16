import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2DaterangepickerComponent } from './ng2-daterangepicker.component';

describe('Ng2DaterangepickerComponent', () => {
  let component: Ng2DaterangepickerComponent;
  let fixture: ComponentFixture<Ng2DaterangepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2DaterangepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2DaterangepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
