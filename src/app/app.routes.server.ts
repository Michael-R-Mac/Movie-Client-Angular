/**
 * @module AppRoutesServer
 * Configuration for Angular SSR/SSG rendering modes.
 * This file determines how specific routes are handled by the server engine.
 */

import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Defines the rendering strategy for server-side routes.
 * * @remarks
 * Currently, the configuration uses a catch-all pattern (`**`) set to {@link RenderMode.Prerender}.
 * This means the application is configured for **Static Site Generation (SSG)**, where
 * all routes will be pre-rendered into static HTML files during the build process.
 * * @example
 * // To switch a specific route to Server-Side Rendering (SSR):
 * {
 * path: 'user-profile',
 * renderMode: RenderMode.Server
 * }
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
