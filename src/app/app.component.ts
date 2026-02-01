import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * The root component of the application.
 * * @remarks
 * This component serves as the main container for the application. It includes
 * the {@link RouterOutlet} to enable navigation between different views like the
 * welcome page and the movie gallery.
 * * @example
 * ```html
 * * <app-root></app-root>
 * ```
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * The title of the application.
   * This value is used within the component's template and tests.
   */
  title = 'myFlix-Angular-client';
}
