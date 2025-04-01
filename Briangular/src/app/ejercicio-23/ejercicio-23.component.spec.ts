import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio23Component } from './ejercicio-23.component';

describe('Ejercicio23Component', () => {
  let component: Ejercicio23Component;
  let fixture: ComponentFixture<Ejercicio23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
