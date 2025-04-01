import { TestBed } from '@angular/core/testing';

import { Practice21Service } from './practice21.service';

describe('Practice21Service', () => {
  let service: Practice21Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice21Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
