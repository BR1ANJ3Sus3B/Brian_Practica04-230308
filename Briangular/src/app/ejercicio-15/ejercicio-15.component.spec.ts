import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio15Component } from './ejercicio-15.component';

describe('Ejercicio15Component', () => {
  let component: Ejercicio15Component;
  let fixture: ComponentFixture<Ejercicio15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
