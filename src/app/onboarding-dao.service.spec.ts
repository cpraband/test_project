import { TestBed } from '@angular/core/testing';

import { OnboardingDAOService } from './onboarding-dao.service';

describe('OnboardingDAOService', () => {
  let service: OnboardingDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
