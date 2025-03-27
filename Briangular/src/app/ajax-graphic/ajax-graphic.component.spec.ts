import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxGraphicComponent } from './ajax-graphic.component';

describe('AjaxGraphicComponent', () => {
  let component: AjaxGraphicComponent;
  let fixture: ComponentFixture<AjaxGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjaxGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
