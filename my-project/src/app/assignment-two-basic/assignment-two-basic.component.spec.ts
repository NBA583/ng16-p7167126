import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTwoBasicComponent } from './assignment-two-basic.component';

describe('AssignmentTwoBasicComponent', () => {
  let component: AssignmentTwoBasicComponent;
  let fixture: ComponentFixture<AssignmentTwoBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentTwoBasicComponent]
    });
    fixture = TestBed.createComponent(AssignmentTwoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
