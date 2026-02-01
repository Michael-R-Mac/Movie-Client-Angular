/**
 * @module ServerBootstrap
 * This module provides the entry point for bootstrapping the Angular application on the server.
 */

import {
  BootstrapContext,
  bootstrapApplication,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Bootstraps the Angular application instance for Server-Side Rendering (SSR).
 * * @param context - The {@link BootstrapContext} provided by the Angular server engine,
 * containing hydration and rendering information.
 * @returns A promise that resolves to the application reference.
 * * @remarks
 * This function uses {@link bootstrapApplication} to initialize the {@link AppComponent}
 * with the server-specific configuration {@link config}. It is exported as the default
 * function to be used by the server engine.
 */
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
