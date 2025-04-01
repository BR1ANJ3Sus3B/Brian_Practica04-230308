import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio25Component } from './ejercicio-25.component';

describe('Ejercicio25Component', () => {
  let component: Ejercicio25Component;
  let fixture: ComponentFixture<Ejercicio25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
