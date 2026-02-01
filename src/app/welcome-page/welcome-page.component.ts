import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * The WelcomePageComponent serves as the initial landing page for the application.
 * * @remarks
 * This component displays the welcome message and provides buttons to open
 * the login and registration dialogs. It acts as the primary entry point for
 * unauthorized users.
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
  /**
   * The application title displayed on the welcome screen.
   */
  title = 'myFlix-Angular-client';

  /**
   * @param dialog - The {@link MatDialog} service used to open modal overlays.
   */
  constructor(public dialog: MatDialog) {}

  /**
   * Opens the registration dialog.
   * * @remarks
   * This method triggers the {@link UserRegistrationFormComponent} within a
   * Material Design dialog box with a pre-defined width of `280px`.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px',
    });
  }

  /**
   * Opens the login dialog.
   * * @remarks
   * This method triggers the {@link UserLoginFormComponent} within a
   * Material Design dialog box with a pre-defined width of `280px`.
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px',
    });
  }
}
