import { TestBed } from '@angular/core/testing';

import { Practice22Service } from './practice22.service';

describe('Practice22Service', () => {
  let service: Practice22Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice22Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
