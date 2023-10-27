import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMotorcycleFormComponent } from './new-motorcycle-form.component';

describe('NewMotorcycleFormComponent', () => {
  let component: NewMotorcycleFormComponent;
  let fixture: ComponentFixture<NewMotorcycleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMotorcycleFormComponent]
    });
    fixture = TestBed.createComponent(NewMotorcycleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
