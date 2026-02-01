/**
 * @module MovieCardComponentTests
 * Unit tests for the {@link MovieCardComponent}.
 * This suite verifies the successful initialization and rendering of the movie gallery component.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  /**
   * The instance of the MovieCardComponent under test.
   */
  let component: MovieCardComponent;

  /**
   * The test fixture that provides access to the component instance and its DOM element.
   */
  let fixture: ComponentFixture<MovieCardComponent>;

  /**
   * Sets up the testing module before each test.
   * * @remarks
   * This configuration imports the standalone {@link MovieCardComponent} and
   * triggers the compilation of its template and styles. It also initializes
   * the component and fixture instances.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case: Verification of component creation.
   * Ensures that the Angular framework can correctly instantiate the {@link MovieCardComponent}.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
