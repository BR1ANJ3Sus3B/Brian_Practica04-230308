import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPopulationPyramidComponent } from './graphic-population-pyramid.component';

describe('GraphicPopulationPyramidComponent', () => {
  let component: GraphicPopulationPyramidComponent;
  let fixture: ComponentFixture<GraphicPopulationPyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicPopulationPyramidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPopulationPyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
