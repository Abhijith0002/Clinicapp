import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewmoreComponent } from './admin-viewmore.component';

describe('AdminViewmoreComponent', () => {
  let component: AdminViewmoreComponent;
  let fixture: ComponentFixture<AdminViewmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
