import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineManagementComponent } from './medicine-management.component';

describe('MedicineManagementComponent', () => {
  let component: MedicineManagementComponent;
  let fixture: ComponentFixture<MedicineManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
