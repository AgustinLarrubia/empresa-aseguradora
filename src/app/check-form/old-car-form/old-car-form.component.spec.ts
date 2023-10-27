import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCarFormComponent } from './old-car-form.component';

describe('OldCarFormComponent', () => {
  let component: OldCarFormComponent;
  let fixture: ComponentFixture<OldCarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldCarFormComponent]
    });
    fixture = TestBed.createComponent(OldCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
