import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabdashComponent } from './labdash.component';

describe('LabdashComponent', () => {
  let component: LabdashComponent;
  let fixture: ComponentFixture<LabdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
