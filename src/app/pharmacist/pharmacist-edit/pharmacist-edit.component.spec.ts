import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistEditComponent } from './pharmacist-edit.component';

describe('PharmacistEditComponent', () => {
  let component: PharmacistEditComponent;
  let fixture: ComponentFixture<PharmacistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
