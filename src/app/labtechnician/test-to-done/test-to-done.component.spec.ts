import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToDoneComponent } from './test-to-done.component';

describe('TestToDoneComponent', () => {
  let component: TestToDoneComponent;
  let fixture: ComponentFixture<TestToDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestToDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestToDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
