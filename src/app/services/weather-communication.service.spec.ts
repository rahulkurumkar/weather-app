import { TestBed } from '@angular/core/testing';

import { WeatherCommunicationService } from './weather-communication.service';

describe('WeatherCommunicationService', () => {
  let service: WeatherCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
