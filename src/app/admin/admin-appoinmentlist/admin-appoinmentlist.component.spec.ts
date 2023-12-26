import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppoinmentlistComponent } from './admin-appoinmentlist.component';

describe('AdminAppoinmentlistComponent', () => {
  let component: AdminAppoinmentlistComponent;
  let fixture: ComponentFixture<AdminAppoinmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppoinmentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppoinmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
