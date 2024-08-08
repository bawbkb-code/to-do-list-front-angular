import { TestBed } from '@angular/core/testing';

import { HttpCoreInterceptor } from './http-core.interceptor';

describe('HttpCoreInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpCoreInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpCoreInterceptor = TestBed.inject(HttpCoreInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
