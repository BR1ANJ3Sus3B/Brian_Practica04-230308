import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxTableComponent } from './ajax-table.component';

describe('AjaxTableComponent', () => {
  let component: AjaxTableComponent;
  let fixture: ComponentFixture<AjaxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjaxTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
