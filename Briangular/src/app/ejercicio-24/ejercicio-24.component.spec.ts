import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio24Component } from './ejercicio-24.component';

describe('Ejercicio24Component', () => {
  let component: Ejercicio24Component;
  let fixture: ComponentFixture<Ejercicio24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
