import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddmedComponent } from './doctor-addmed.component';

describe('DoctorAddmedComponent', () => {
  let component: DoctorAddmedComponent;
  let fixture: ComponentFixture<DoctorAddmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAddmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
