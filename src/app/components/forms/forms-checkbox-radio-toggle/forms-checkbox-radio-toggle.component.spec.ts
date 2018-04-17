import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCheckboxRadioToggleComponent } from './forms-checkbox-radio-toggle.component';

describe('FormsCheckboxRadioToggleComponent', () => {
  let component: FormsCheckboxRadioToggleComponent;
  let fixture: ComponentFixture<FormsCheckboxRadioToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCheckboxRadioToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCheckboxRadioToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
