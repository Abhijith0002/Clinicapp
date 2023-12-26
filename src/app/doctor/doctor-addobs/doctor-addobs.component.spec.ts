import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddobsComponent } from './doctor-addobs.component';

describe('DoctorAddobsComponent', () => {
  let component: DoctorAddobsComponent;
  let fixture: ComponentFixture<DoctorAddobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAddobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
