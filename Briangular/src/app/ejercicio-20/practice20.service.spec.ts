import { TestBed } from '@angular/core/testing';

import { Practice20Service } from './practice20.service';

describe('Practice20Service', () => {
  let service: Practice20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
