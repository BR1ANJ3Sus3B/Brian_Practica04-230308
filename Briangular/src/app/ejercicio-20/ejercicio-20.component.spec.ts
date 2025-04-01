import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio20Component } from './ejercicio-20.component';

describe('Ejercicio20Component', () => {
  let component: Ejercicio20Component;
  let fixture: ComponentFixture<Ejercicio20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
