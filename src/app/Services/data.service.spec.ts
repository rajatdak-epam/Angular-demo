import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call setData with subject next method', () => {
    service.setData(["hello world"]);
    service.data$.subscribe((message) => {
      expect(message).toEqual(["hello world"]);
    })
  });
});
