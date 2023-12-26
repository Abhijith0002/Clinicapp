import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListpatientComponent } from './admin-listpatient.component';

describe('AdminListpatientComponent', () => {
  let component: AdminListpatientComponent;
  let fixture: ComponentFixture<AdminListpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
