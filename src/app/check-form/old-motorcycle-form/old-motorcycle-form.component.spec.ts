import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMotorcycleFormComponent } from './old-motorcycle-form.component';

describe('OldMotorcycleFormComponent', () => {
  let component: OldMotorcycleFormComponent;
  let fixture: ComponentFixture<OldMotorcycleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldMotorcycleFormComponent]
    });
    fixture = TestBed.createComponent(OldMotorcycleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
