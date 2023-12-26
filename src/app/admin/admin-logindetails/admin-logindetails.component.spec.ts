import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogindetailsComponent } from './admin-logindetails.component';

describe('AdminLogindetailsComponent', () => {
  let component: AdminLogindetailsComponent;
  let fixture: ComponentFixture<AdminLogindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogindetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLogindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
