/**
 * @module WelcomePageComponentTests
 * Unit tests for the {@link WelcomePageComponent}.
 * This suite ensures that the landing page of the application initializes correctly,
 * providing the entry point for both new and returning users.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomePageComponent } from './welcome-page.component';

describe('WelcomePageComponent', () => {
  /**
   * The instance of the WelcomePageComponent under test.
   */
  let component: WelcomePageComponent;

  /**
   * The test fixture that handles the environment and change detection for the component.
   */
  let fixture: ComponentFixture<WelcomePageComponent>;

  /**
   * Sets up the testing environment before each test.
   * * @remarks
   * This configuration imports the standalone {@link WelcomePageComponent} and
   * compiles its template. It also creates the fixture and detects changes to
   * ensure the component is in its initial state.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case: Component instantiation check.
   * Confirms that the {@link WelcomePageComponent} is created without errors.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
