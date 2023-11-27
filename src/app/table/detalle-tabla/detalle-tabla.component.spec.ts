import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTablaComponent } from './detalle-tabla.component';

describe('DetalleTablaComponent', () => {
  let component: DetalleTablaComponent;
  let fixture: ComponentFixture<DetalleTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleTablaComponent]
    });
    fixture = TestBed.createComponent(DetalleTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
