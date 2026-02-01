/**
 * @module AppConfigServer
 * Server-side application configuration.
 * This module merges the base application configuration with server-specific providers
 * for Angular SSR (Server-Side Rendering).
 */

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/**
 * Server-specific configuration object.
 * * @providers
 * - `provideServerRendering()`: Enables Angular SSR capabilities.
 * - `provideServerRouting(serverRoutes)`: Configures server-side path handling based on {@link serverRoutes}.
 */
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideServerRouting(serverRoutes)],
};

/**
 * The final merged application configuration used when bootstrapping the server.
 * * @remarks
 * This combines the client-side {@link appConfig} with the {@link serverConfig}.
 * The merged configuration ensures that both universal and server-only dependencies
 * are correctly injected.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);
