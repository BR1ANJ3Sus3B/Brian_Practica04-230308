import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio18Component } from './ejercicio-18.component';

describe('Ejercicio18Component', () => {
  let component: Ejercicio18Component;
  let fixture: ComponentFixture<Ejercicio18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
