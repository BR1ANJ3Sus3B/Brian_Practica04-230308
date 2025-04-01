import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio17Component } from './ejercicio-17.component';

describe('Ejercicio17Component', () => {
  let component: Ejercicio17Component;
  let fixture: ComponentFixture<Ejercicio17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
