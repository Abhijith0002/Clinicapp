import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistAddComponent } from './pharmacist-add.component';

describe('PharmacistAddComponent', () => {
  let component: PharmacistAddComponent;
  let fixture: ComponentFixture<PharmacistAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
