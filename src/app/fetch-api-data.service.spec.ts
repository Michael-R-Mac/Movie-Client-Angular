/**
 * @module FetchApiDataServiceTests
 * Unit tests for the {@link FetchApiDataService}.
 * This suite ensures that the service is correctly injected and initialized
 * within the Angular testing environment.
 */

import { TestBed } from '@angular/core/testing';
import { FetchApiDataService } from './fetch-api-data.service';

describe('FetchApiDataService', () => {
  /**
   * The instance of the service under test.
   */
  let service: FetchApiDataService;

  /**
   * Sets up the testing environment before each test case.
   * * @remarks
   * Uses {@link TestBed} to inject the {@link FetchApiDataService}
   * into the test environment.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDataService);
  });

  /**
   * Test case: Verification of service instantiation.
   * Ensures that the Angular Dependency Injection system can successfully
   * create an instance of the service.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
