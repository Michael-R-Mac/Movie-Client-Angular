/**
 * @module BrowserMain
 * This is the main entry point for the client-side Angular application.
 * It handles the manual bootstrapping of the root {@link AppModule}.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * Bootstraps the Angular application using the JIT (Just-In-Time) compiler.
 * * @remarks
 * This process initializes the {@link AppModule} and attaches the application
 * to the DOM element specified in the component selector (usually `app-root`).
 * If the bootstrapping process fails, the error is caught and logged to the console.
 * * @returns A promise that resolves when the application is successfully bootstrapped.
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
