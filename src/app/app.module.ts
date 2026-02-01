/**
 * @module AppModule
 * The root module of the myFlix application.
 * This module coordinates the bootstrapping of the {@link AppComponent} and integrates
 * all necessary Angular Material modules, feature components, and core services.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

/**
 * The AppModule class.
 * * @remarks
 * While the application uses standalone components, this module serves as the
 * root for bootstrapping the application. It imports all required Material Design
 * modules to ensure they are available for the UI components.
 * * @imports
 * - {@link AppRoutingModule}: For application-wide navigation.
 * - {@link HttpClientModule}: For making API requests to the myFlix backend.
 * - `MatModules`: Various Angular Material components for a consistent UI/UX.
 * - `FeatureComponents`: Components for user authentication and movie display.
 */
@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    WelcomePageComponent,
    MovieCardComponent,
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
