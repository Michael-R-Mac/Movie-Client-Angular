/**
 * @module AppConfig
 * Base application configuration for the myFlix Angular client.
 * This file defines the global providers, including routing, hydration,
 * and Material Design modules available to the entire application.
 */

import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

/**
 * The global application configuration object.
 * * @providers
 * - `provideZoneChangeDetection`: Optimizes performance by coalescing events.
 * - `provideRouter`: Initializes the navigation routes defined in {@link routes}.
 * - `provideClientHydration`: Enables Angular's hydration system with `withEventReplay` for seamless SSR-to-client transition.
 * - `importProvidersFrom`: Includes essential modules for:
 * - API communication ({@link HttpClientModule})
 * - UI animations ({@link BrowserAnimationsModule})
 * - Material Design components ({@link MatSnackBarModule}, {@link MatDialogModule})
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      MatSnackBarModule,
      MatDialogModule,
    ),
  ],
};
