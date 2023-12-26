import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMedicineBillsComponent } from './generate-medicine-bills.component';

describe('GenerateMedicineBillsComponent', () => {
  let component: GenerateMedicineBillsComponent;
  let fixture: ComponentFixture<GenerateMedicineBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMedicineBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateMedicineBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
