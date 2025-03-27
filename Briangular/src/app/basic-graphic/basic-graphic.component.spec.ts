import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGraphicComponent } from './basic-graphic.component';

describe('BasicGraphicComponent', () => {
  let component: BasicGraphicComponent;
  let fixture: ComponentFixture<BasicGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
