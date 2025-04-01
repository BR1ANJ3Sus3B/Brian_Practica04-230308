import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio21Component } from './ejercicio-21.component';

describe('Ejercicio21Component', () => {
  let component: Ejercicio21Component;
  let fixture: ComponentFixture<Ejercicio21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
