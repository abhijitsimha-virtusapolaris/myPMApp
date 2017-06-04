/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductGaurdService } from './product-gaurd.service';

describe('ProductGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGaurdService]
    });
  });

  it('should ...', inject([ProductGaurdService], (service: ProductGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
