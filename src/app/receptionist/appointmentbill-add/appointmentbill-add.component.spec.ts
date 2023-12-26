import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentbillAddComponent } from './appointmentbill-add.component';

describe('AppointmentbillAddComponent', () => {
  let component: AppointmentbillAddComponent;
  let fixture: ComponentFixture<AppointmentbillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentbillAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentbillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
