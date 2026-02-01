/**
 * @module AppComponentTests
 * Unit tests for the {@link AppComponent}.
 * This suite ensures that the root component initializes correctly and renders the expected UI elements.
 */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /**
   * Sets up the testing module before each test.
   * * @remarks
   * This configuration imports the standalone {@link AppComponent} and compiles
   * its template and styles.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  /**
   * Test case: Verifies that the component is successfully instantiated.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Test case: Verifies the component's title property value.
   * * @remarks
   * Expects the title to be exactly `'myFlix-Angular-client'`.
   */
  it(`should have the 'myFlix-Angular-client' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myFlix-Angular-client');
  });

  /**
   * Test case: DOM verification.
   * Verifies that the title is correctly rendered within an `<h1>` tag in the template.
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, myFlix-Angular-client',
    );
  });
});
