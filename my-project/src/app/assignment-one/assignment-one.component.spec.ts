import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentOneComponent } from './assignment-one.component';

describe('AssignmentOneComponent', () => {
  let component: AssignmentOneComponent;
  let fixture: ComponentFixture<AssignmentOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentOneComponent]
    });
    fixture = TestBed.createComponent(AssignmentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
