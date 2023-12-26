import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepdashComponent } from './recepdash.component';

describe('RecepdashComponent', () => {
  let component: RecepdashComponent;
  let fixture: ComponentFixture<RecepdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
