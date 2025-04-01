import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio16Component } from './ejercicio-16.component';

describe('Ejercicio16Component', () => {
  let component: Ejercicio16Component;
  let fixture: ComponentFixture<Ejercicio16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
