import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestToDoneViewComponent } from './test-to-done-view.component';

describe('TestToDoneViewComponent', () => {
  let component: TestToDoneViewComponent;
  let fixture: ComponentFixture<TestToDoneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestToDoneViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestToDoneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
