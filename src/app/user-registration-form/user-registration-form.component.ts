import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

/**
 * Component representing the user registration form.
 * * @remarks
 * This component provides a UI for new users to create an account.
 * It uses {@link FetchApiDataService} to send user details to the backend
 * and displays feedback via {@link MatSnackBar}.
 */
@Component({
  selector: 'app-user-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  /**
   * Input data for creating a new user.
   * * @defaultValue `{ Username: '', Password: '', Email: '', Birthday: '' }`
   */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * @param fetchApiData - Service for API communication.
   * @param dialogRef - Reference to the dialog instance to allow programmatic closing.
   * @param snackBar - Service to show pop-up notifications to the user.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar,
  ) {}

  /**
   * Initializer for the component.
   */
  ngOnInit(): void {}

  /**
   * Sends the {@link userData} to the backend to register a new account.
   * * @remarks
   * Upon successful registration:
   * 1. The registration dialog is closed.
   * 2. A success message is displayed via snack bar.
   * * Upon failure:
   * 1. An error message is displayed via snack bar.
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        this.dialogRef.close();
        this.snackBar.open('Registration successful!', 'OK', {
          duration: 2000,
        });
      },
      (error) => {
        this.snackBar.open(error, 'OK', {
          duration: 2000,
        });
      },
    );
  }
}
