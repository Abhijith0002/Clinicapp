import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineBillsNewComponent } from './medicine-bills-new.component';

describe('MedicineBillsNewComponent', () => {
  let component: MedicineBillsNewComponent;
  let fixture: ComponentFixture<MedicineBillsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineBillsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineBillsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
