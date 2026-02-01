/**
 * @module UserRegistrationFormComponentTests
 * Unit tests for the {@link UserRegistrationFormComponent}.
 * This suite ensures that the registration form can be correctly compiled and
 * instantiated within the Angular testing environment.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationFormComponent } from './user-registration-form.component';

describe('UserRegistrationFormComponent', () => {
  /**
   * The instance of the UserRegistrationFormComponent under test.
   */
  let component: UserRegistrationFormComponent;

  /**
   * The test fixture that provides the environment for the component instance.
   */
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  /**
   * Sets up the testing module before each individual test.
   * * @remarks
   * This configuration imports the standalone {@link UserRegistrationFormComponent},
   * compiles its dependencies, and initializes the component fixture to trigger
   * initial data binding.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistrationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case: Component instantiation check.
   * Verifies that the {@link UserRegistrationFormComponent} is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
