import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Component representing the login form for existing users.
 * * @remarks
 * This component renders a dialog-based form where users can enter their credentials.
 * Upon successful login, the user's data and JWT token are stored in `localStorage`,
 * and the user is redirected to the movie gallery.
 */
@Component({
  selector: 'app-user-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.scss',
})
export class UserLoginFormComponent implements OnInit {
  /**
   * Input object to store the login credentials entered by the user.
   * @defaultValue `{ Username: '', Password: '' }`
   */
  @Input() userData = { Username: '', Password: '' };

  /**
   * @param fetchApiData - Service for making API calls.
   * @param dialogRef - Reference to the dialog instance containing this component.
   * @param snackBar - Service for displaying pop-up notifications.
   * @param router - Service for navigating between routes.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router,
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   */
  ngOnInit(): void {}

  /**
   * Sends user login information to the backend via {@link FetchApiDataService}.
   * * @remarks
   * On success:
   * 1. Stores the user object and JWT token in `localStorage`.
   * 2. Closes the login dialog.
   * 3. Shows a "Login successful" notification.
   * 4. Navigates to the 'movies' route.
   * * On failure:
   * 1. Displays a snack bar notification with the error message.
   */
  userLogin(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.token);
        this.dialogRef.close(); // Logic to close the modal
        this.snackBar.open('Login successful', 'OK', {
          duration: 2000,
        });
        this.router.navigate(['movies']);
      },
      (result) => {
        this.snackBar.open('Login failed: ' + result, 'OK', {
          duration: 2000,
        });
      },
    );
  }
}
